import { Message } from "discord.js";
import {
    default as CookiecordClient,
    Module,
    command,
    CommonInhibitors,
} from "cookiecord";
import { config } from "../../config";

export default class LinesModule extends Module {
    config = config.discord.lines;
    constructor(client: CookiecordClient) {
        super(client);
    }

    START = 1615613520000;
    SCH_END = 1718166720000;
    DAY = 86400000;

    @command({ description: "my lil lines..", inhibitors: [CommonInhibitors.botAdminsOnly] })
    async lines(msg: Message) {
        await msg.reply(this.getLineMessage());
    }

    public getLineMessage(): string {
        let col = 0, buf = "", t = 1196, d = Math.round((Date.now() - this.START) / this.DAY);
        while (t > 0) {
            if (d > 0) d--;
            t--;
            col++;
            buf += d > 0 ? "*" : "_"
            if (col % 80 == 0) buf += "\n"
        }
        const BQ = "```";
        return `${BQ}\n${buf}\n${BQ}`;
    }
}

export interface LinesConfig {
    channelId: string;
}
