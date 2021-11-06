import CookiecordClient, { HelpModule } from "cookiecord";
import { Intents } from "discord.js";
import dotenv from "dotenv-safe";
import AdminModule from "./discord/modules/admin";
import ComicPoller from "./discord/modules/comic";
import FunModule from "./discord/modules/fun";
import ProxyManager from "./discord/modules/proxy";

import "./discord/store"; // for side effects

dotenv.config();

const client = new CookiecordClient(
    {
        botAdmins: process.env.BOT_ADMINS?.split(","),
        prefix: "yp!",
    },
    {
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        ],
    }
);

if (process.argv[0].endsWith("ts-node")) {
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
