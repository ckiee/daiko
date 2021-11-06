import CookiecordClient, { listener, Module } from "cookiecord";
import { Guild, Message, Collection } from "discord.js";

export default class EphemeralModule extends Module {
    constructor(client: CookiecordClient) {
        super(client);

    }

    allowedUsers: Collection<string, number> = new Collection(); // <ID, EndUnixTime>
    TIMEOUT_DUR = 1000 * 60 * 30; // 1 sec, 1 min, 30 min
    HISTORY_ROLE_ID = process.env.HISTORY_ROLE_ID!;

    @listener({ event: "ready" })
    async populateExisting() {
        const guilds = await this.client.guilds.fetch({ limit: 1 });
        const guild = await guilds.first()?.fetch();
        if (!guild) return;
        const members = await guild.members.fetch();
        members
            .filter(member => member.roles.cache.has(this.HISTORY_ROLE_ID))
            .forEach(member => this.allowedUsers.set(member.id, Date.now() + this.TIMEOUT_DUR));
    }


    @listener({ event: "messageCreate" })
    async memberAdder(msg: Message) {
        return; // no more ephemeral shenanigans.

        this.allowedUsers.set(msg.member!.id, Date.now() + this.TIMEOUT_DUR)
        if (msg.member!.roles.cache.has(this.HISTORY_ROLE_ID)) return;

        msg.member!.roles.add(this.HISTORY_ROLE_ID);
    }


    @listener({ event: "ready" })
    async timerInit() {
        const guilds = await this.client.guilds.fetch({ limit: 1 });
        const guild = await guilds.first()?.fetch();
        if (!guild) throw Error("guild needed for garbage collection");
        setInterval(() => this.timedGarbageCollector(guild), 5000);
    }

    timedGarbageCollector(guild: Guild) {
        this.allowedUsers.filter(expiryTime => Date.now() > expiryTime).forEach(async (_, memberID) => {
            const member = guild.members.resolve(memberID);
            if (!member) return;
            member.roles.remove(this.HISTORY_ROLE_ID);
        });
    }
}
