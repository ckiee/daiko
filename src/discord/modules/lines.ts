import { Message } from "discord.js";
import {
    default as CookiecordClient,
    Module,
    command,
    CommonInhibitors,
    optional,
} from "cookiecord";
import { config } from "../../config";

export default class LinesModule extends Module {
    config = config.discord.lines;
    constructor(client: CookiecordClient) {
        super(client);
    }

    START = 1615613520000;
    DAY = 86400000;

    @command({ description: "my lil lines..", inhibitors: [CommonInhibitors.botAdminsOnly] })
    async lines(msg: Message, @optional filter?: string) {
        await msg.reply(this.getLineMessage(filter ? [...filter] : "all"));
    }

    public getLineMessage(showLabels: string[] | "all"): string {
        const msToDays = (ms: number) => Math.round(ms / this.DAY);
        const events = ([
            ["*", Date.now() - this.START],
            ...this.config.events.map(([text, time]) => [text[0], time - this.START])
        ] as [string, number][])
            .filter(([l, _]) => showLabels == "all" || showLabels.includes(l))
            .map(([_, ms]) => [_, msToDays(ms)]) as [string, number][];

        const progress = events[0][1];

        const displayDayCount = Math.max(...events.map(x => x[1]));

        const buf = Array(displayDayCount).fill("?").map((_, i) => {
            const progressEvent = progress >= i;
            const maybeEvent = events.slice(1).filter(([_label, ei]) => ei == i + 1)[0];
            return (maybeEvent ? maybeEvent[0] : (progressEvent ? "*" : "_")) +
                ((i + 1) % 80 == 0 ? "\n" : "");
        }).join("");

        const BQ = "```";
        return `${BQ}
${buf}

${events.map(([l, d]) => `${l}: ${d}`).join("\t\t")}
${events.map(([l, d]) => `${l}-${events[0][0]}: ${d - progress}`).join("\t")}
${BQ}`;
    }
}

export interface LinesConfig {
    channelId: string;
    events: [string, number][];
}
