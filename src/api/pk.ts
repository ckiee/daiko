import fetch from "node-fetch";
import { MemoizeExpiring } from "typescript-memoize";
import { logger } from "../logger";
import {
    UserResolvable,
    User,
    Message,
    GuildMember,
    ThreadMember,
} from "discord.js";

export class PluralKitAPI {
    PK_BASE = "https://api.pluralkit.me/v1";
    private headers = {
        "User-Agent":
            "daiko (https://github.com/ckiee/daiko/blob/master/src/api/pk.ts)",
        "Content-Type": "application/json",
        "Authorization": this.token
    };
    constructor(private token: string = "") { }

    private async getJSON(path: string): Promise<any> {
        const res = await fetch(this.PK_BASE + path, {
            headers: this.headers
        });
        if (!res.ok) {
            logger.error(`${path} => ${res.status}`);
        }
        const json = await res.json();
        logger.trace(`${path} => ${JSON.stringify(json)}`);
        return json;
    }

    private async postJSON(path: string, data: any): Promise<void> {
        logger.info(`${path} + ${JSON.stringify(data)}`);
        const res = await fetch(this.PK_BASE + path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: this.headers
        });
        if (!res.ok) throw new Error(`POST ${path} returned ${res.status}`);
    }

    @MemoizeExpiring(900000) // 15 min
    async getMembers(sys: PluralSystem): Promise<SystemMember[]> {
        return await this.getJSON(`/s/${sys.id}/members`);
    }

    @MemoizeExpiring(500)
    async getFronters(sys: PluralSystem): Promise<SystemMember[]> {
        return (await this.getJSON(`/s/${sys.id}/fronters`)).members;
    }

    @MemoizeExpiring(3.6e6) // 1 hour
    async getSystemById(id: string): Promise<PluralSystem> {
        return await this.getJSON(`/s/${id}`);
    }

    @MemoizeExpiring(3.6e6) // 1 hour
    async getSystemByUser(resolvable: UserResolvable): Promise<PluralSystem> {
        let id;

        if (typeof resolvable == "string") id = resolvable;
        else if (
            resolvable instanceof User ||
            resolvable instanceof GuildMember ||
            resolvable instanceof ThreadMember
        )
            id = resolvable.id;
        else if (resolvable instanceof Message) id = resolvable.author.id;
        else throw new Error("could not resolve UserResolvable");

        return await this.getJSON(`/a/${id}`);
    }

    async postSwitch(members: SystemMember[]) {
        await this.postJSON("/s/switches", { members: members.map((m) => m.id) });
    }
}

export interface SystemMember {
    id: string;
    name: string;
    color: string;
    avatar_url: string;
    birthday: string;
    pronouns: string;
    description: string;
    proxy_tags: { prefix: string; suffix: string }[];
    keep_proxy: boolean;
    created: string;
    // there are more fields but they seem to be null in the docs
    // so we're ignoring them.
}

export interface PluralSystem {
    id: string;
    name: string;
    description: string;
    tag: string;
    avatar_uri: string;
    tz: string;
    created: string;
    // null fields omitted
}
