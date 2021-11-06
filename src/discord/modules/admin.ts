import CookiecordClient, { command, CommonInhibitors, Module } from "cookiecord";
import { Message } from "discord.js";
import { inspect } from "util";
import { logger } from "../../logger";

export default class AdminModule extends Module {
    constructor(client: CookiecordClient) {
        super(client);
    }

    @command({
        description: "eval some js",
        single: true,
        inhibitors: [CommonInhibitors.botAdminsOnly]
    })
    async eval(msg: Message, js: string) {
        logger.warn(`${msg.author.tag} ${msg.author.id}: EVAL: ${js}`);
        try {
            let result = eval(js);
            if (result instanceof Promise) result = await result;
            if (typeof result != `string`) result = inspect(result);
            if (result.length > 1990)
                return await msg.channel.send(
                    `Message is over the discord message limit.`
                );
            await msg.channel.send(
                "```js\n" +
                result
                    .split(this.client.token)
                    .join("[TOKEN]")
                    .split("```")
                    .join("\\`\\`\\`") +
                "\n```"
            );
        } catch (error: any) {
            msg.channel.send(
                "error! " +
                (`${error}` || "")
                    .toString()
                    .split(this.client.token || "")
                    .join("[TOKEN]")
            );
        }
    }
}
