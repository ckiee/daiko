import { Message } from "discord.js";
import {
    default as CookiecordClient,
    Module,
    command,
    optional,
} from "cookiecord";
import { PluralKitAPI } from "../../api/pk";

export default class FunModule extends Module {
    private pk = new PluralKitAPI();

    constructor(client: CookiecordClient) {
        super(client);
    }

    @command({ description: "Roll a random member", aliases: ["pkroll", "pkr"] })
    async roll(msg: Message, @optional _excludeFront?: string) {
        const excludeFront = _excludeFront == "nofront";
        let editedMsg = false;
        const reply = await msg.reply("🥁");

        setTimeout(async () => {
            await reply.edit("🥁🥁");
            editedMsg = true;
        }, 250);

        const system = await this.pk.getSystemByUser(msg.author);
        const members = await this.pk.getMembers(system);

        const frontIds = (await this.pk.getFronters(system)).map((m) => m.id);
        const candidates = excludeFront
            ? members.filter((m) => !frontIds.includes(m.id))
            : members;

        const randMember =
            candidates[Math.floor(Math.random() * candidates.length)];

        const interval = setInterval(async () => {
            if (editedMsg || Date.now() - reply.createdTimestamp > 1500) {
                clearInterval(interval);
                await reply.edit(`🥁${randMember.name}🥁`);
            }
        });
    }
}
