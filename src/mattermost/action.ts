import * as EventEmitter from "events";
import { config } from "../config";
import { Post } from "@mattermost/types/posts";
import { nanoid } from "nanoid";
import { logger } from "../logger";

export const endpoint = config.web.base + "/mattermost-action";

export const forgeryToken = nanoid();

export interface ActionTrigger {
    user_id: string;
    user_name: string;
    channel_id: string;
    channel_name: string;
    team_id: string;
    team_domain: string;
    post_id: string;
    trigger_id: string;
    type: string;
    data_source?: string;
    context?: any & {
        token?: string;
    };
}

type F = (t: ActionTrigger) => Promise<
    | undefined
    | {
          update?: Partial<Post>;
          ephemeral_text?: string;
          skip_slack_parsing?: boolean;
      }
>;

export const triggerDispatch = {
    async handler(t: ActionTrigger) {
        if (t.context?.forgeryToken !== forgeryToken)
            return void logger.warn("Action trigger forgery token was invalid");
        const ret = this.pending.get(t.post_id)?.(t) ?? {};
        if ((<any>ret).update?.props && !(<any>ret).update.props.attachments)
            this.pending.delete(t.post_id);
        return ret;
    },
    on(post: Post, f: F) {
        return new Promise<ActionTrigger>((resolve) => {
            // FIXME: introduces mem leak (partially addressed 6k)
            this.pending.set(post.id, (t) => {
                resolve(t);
                return f(t);
            });
        });
    },
    pending: new Map<string, F>(),
};
