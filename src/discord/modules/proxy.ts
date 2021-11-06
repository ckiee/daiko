import { User, MessageReaction, Message, CollectorFilter } from "discord.js";
import { listener, default as CookiecordClient, Module } from "cookiecord";
import { PluralKitAPI, SystemMember } from "../../api/pk";
import { logger } from "../../logger";

export default class ProxyManager extends Module {
    private pk = new PluralKitAPI(process.env.PK_TOKEN!);
    private PK_SYSTEM_ID = process.env.PK_SYSTEM!;

    constructor(client: CookiecordClient) {
        super(client);
    }

    async findProxyTag(content: string): Promise<SystemMember | undefined> {
        const sys = await this.pk.getSystemById(this.PK_SYSTEM_ID);
        const members = await this.pk.getMembers(sys);
        return members.filter(m => content.includes(m.description))[0];
    }

    @listener({ event: "messageCreate" })
    async autoSwitchOnProxy(msg: Message) {
        if (!this.client.botAdmins.includes(msg.author.id)) return;
        const newMember = await this.findProxyTag(msg.content);
        if (!newMember) return;
        const sys = await this.pk.getSystemById(this.PK_SYSTEM_ID);
        const front = await this.pk.getFronters(sys);
        if (front.map(m => m.id).includes(newMember.id)) return logger.debug("already in front, skipping");
        const newFront = [...front, newMember];

        const formattedNewFronters = newFront.map(m => m.name).join(", ");
        const response = await msg.channel.send(`:warning: Register switch to \`${formattedNewFronters}\`?`);

        const REACTION_EMOJI = "✅";
        const filter: CollectorFilter<[MessageReaction, User]> = (reaction, user) => reaction.emoji.name == REACTION_EMOJI && user.id == msg.author.id;

        await response.react(REACTION_EMOJI);
        const reactions = await response.awaitReactions({ max: 1, time: 1000 * 60 * 2, filter });
        const reaction = reactions.first();
        if (!reaction) return;

        await reaction.remove();
        await this.pk.postSwitch(newFront);
        await response.edit(`:white_check_mark: Registered switch to \`${formattedNewFronters}\`.`);
    }
}
