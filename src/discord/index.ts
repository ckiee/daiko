import CookiecordClient, { HelpModule } from "cookiecord";
import { Intents } from "discord.js";
import AdminModule from "./modules/admin";
import ComicPoller from "./modules/comic";
import FunModule from "./modules/fun";
import ProxyManager from "./modules/proxy";
import { config } from "../config";

export async function init() {
    const client = new CookiecordClient(
        {
            botAdmins: process.env.BOT_ADMINS?.split(","),
            prefix: "d!",
        },
        {
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.GUILD_MEMBERS
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
    }

    client.login(process.env.TOKEN);
    client.on("ready", () => console.log(`Logged in as ${client.user?.tag}`));
    return client;
}
