import {
    Client4,
    WebSocketClient,
    type WebSocketMessage,
} from "@mattermost/client";
import { merge } from "moderndash";
import type { Post } from "@mattermost/types/posts";
import { inspect } from "bun";
import { config } from "../config";
import { PartialExcept } from "@mattermost/types/utilities";
import { logger } from "../logger";
import { FriendsStore } from "./friends";

export interface MattermostConfig {
    url: string;
    token: string;
    adminId: string;
}

export interface MattermostStore {
    friends: FriendsStore;
}

export const MAX_MESSAGE_SIZE = 16386;

function makeReply(post: Post) {
    return (opts: PartialExcept<Post, "message"> & { thread?: boolean }) =>
        client.createPost({
            channel_id: post.channel_id,
            root_id: post.root_id || (opts.thread ? post.id : undefined),
            ...opts,
            message: typeof opts.message == "string" ? opts.message : opts.message ? inspect(opts.message).slice(0, MAX_MESSAGE_SIZE) : ""
        });
}

export const commands: Record<
    string,
    (_: {
        post: Post;
        msg: WebSocketMessage<any>;
        reply: ReturnType<typeof makeReply>;
        rest: string;
    }) => any
> = {
    async e({ post, rest, reply }) {
        if (post.user_id !== config.mattermost.adminId) return;
        await reply({
            message: "```js\n" + inspect(eval(rest)) + "\n```",
        });
    },
};

await import("./friends");

const client = new Client4();
client.setUrl(config.mattermost.url);
client.setToken(config.mattermost.token);

const ws = new WebSocketClient();
ws.initialize(client.getWebSocketUrl(), client.token);

const eventHandlers: Record<string, (m: WebSocketMessage<any>) => any> = {
    async posted(msg) {
        if (msg.data.sender_name == "@ilo") return;
        if (msg.data.channel_name !== "tomo-ilo") return;
        const post = JSON.parse(msg.data.post) as Post;

        if (post.message.startsWith("!")) {
            const match = /^!(\w+)\b/.exec(post.message);
            const cmd = match?.[1] ?? "";
            const rest = post.message.slice(match?.[0].length);
            const reply = makeReply(post);
            try {
                await commands[cmd]?.({
                    post,
                    msg,
                    rest,
                    reply,
                });
            } catch (err) {
                logger.error("caught while handling command", cmd, err);
                await reply({
                    message: `⚠️ \`${(err + "").replace(/`/g, "")}\``,
                });
            }
        }
    },
};

ws.addMessageListener(async (msg) => {
    if (!["post_edited"].includes(msg.event))
        console.log(`${msg.seq} got msg T>${msg.event}`);
    // console.debug(msg.data);
    await eventHandlers[msg.event]?.(msg);
});

// the JANKKK jeez
ws.addFirstConnectListener(() =>
    setInterval(() => ws.sendMessage("ping", {}), 2000)
);
