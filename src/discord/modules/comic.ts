import {
    MessageEmbed,
    TextChannel,
    Message,
    CollectorFilter,
} from "discord.js";
import {
    listener,
    default as CookiecordClient,
    Module,
    command,
    CommonInhibitors,
} from "cookiecord";
import { logger } from "../../logger";
import { store } from "../../store";
import { config } from "../../config";
import { ComicSource, fetchers, isComicSource } from "../../api/comic";
import { URL } from "url";

export default class ComicPoller extends Module {
    private config = config.discord.comic;
    private data = store.discord.comic;
    constructor(client: CookiecordClient) {
        super(client);
    }

    @listener({ event: "ready" })
    setupPolling() {
        setInterval(() => this.pollComics(), 600000);
    }

    async pollComics() {
        for (let key in this.data.comics) {
            const comic = this.config.comics[key];
            const comicState = this.data.comics[key];
            logger.trace(`now polling ${key} with ${comic.source}`);
            const meta = await fetchers[comic.source](new URL(comic.url))();
            const latest = meta.pages[meta.pages.length - 1];

            if (comic.maxPageId < latest.id) {
                const embed = new MessageEmbed();
                embed.setAuthor(meta.title, undefined, latest.url);
                embed.setImage(meta.bannerURL);
                embed.setURL(latest.url);
                embed.setTitle(latest.title);

                const chan = await this.client.channels.fetch(
                    process.env.COMICS_CHANNEL_ID!
                );
                if (!chan) throw new Error("could not fetch comics channel");
                if (chan.type != "GUILD_TEXT")
                    throw new Error("comics channel has unexpected type " + chan.type);

                await (<TextChannel>chan).send({
                    content: process.env.COMIC_EXTRA_CONTENT!,
                    embeds: [embed],
                });
                comicState.maxPageId = latest.id;
            }
        }
    }
}

interface PolledComic {
    source: ComicSource;
    url: string;
    maxPageId: number;
}
export interface ComicConfig {
    comics: { [key: string]: PolledComic };
}
export interface ComicStore {
    comics: { [key: string]: { maxPageId: number; } }
}
