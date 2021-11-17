import CookiecordClient, { HelpModule } from "cookiecord";
import { Intents } from "discord.js";
import AdminModule from "./modules/admin";
import ComicPoller, { ComicConfig, ComicStore } from "./modules/comic";
import FunModule from "./modules/fun";
import ProxyManager, { ProxyConfig } from "./modules/proxy";
import { config } from "../config";
import { logger } from "../logger";
import ReminderModule, { ReminderStore } from "./modules/reminder";

export async function init() {
    const client = new CookiecordClient(
        {
            botAdmins: config.discord.botAdmins,
            prefix: "d!",
        },
        {
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.DIRECT_MESSAGES,
                Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
            ],
        }
    );

    if (!config.production) {
        client.loadModulesFromFolder("src/discord/modules");
        client.reloadModulesFromFolder("src/discord/modules");
    } else {
        client.registerModule(HelpModule);
        client.registerModule(ProxyManager);
        client.registerModule(FunModule);
        client.registerModule(ComicPoller);
        client.registerModule(AdminModule);
        client.registerModule(ReminderModule);
    }

    client.login(config.discord.token);
    client.on("ready", () => logger.info(`Logged in as ${client.user?.tag}`));
    return client;
}

export interface DiscordConfig {
    token: string;
    botAdmins: string[];
    proxy: ProxyConfig;
    comic: ComicConfig;
}

export interface DiscordStore {
    reminder: ReminderStore;
    comic: ComicStore;
}
