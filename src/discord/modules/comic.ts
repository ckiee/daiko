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
import { ComicSource, fetchers, isComicSource } from "../../api/comic";
import { URL } from "url";

export default class ComicPoller extends Module {
    private data = store.comic;
    constructor(client: CookiecordClient) {
        super(client);
    }

    @command({
        description: "Add a comic to track",
        inhibitors: [CommonInhibitors.botAdminsOnly],
        exactArgs: true,
    })
    comicadd(msg: Message, key: string, source: ComicSource, _url: string) {
        const url = new URL(_url).toString(); // validate by parsing (:
        if (!isComicSource(source)) throw new Error("invalid source");
        this.data.comics[key] = { source, url, maxPageId: -1 };
        msg.channel.send(`oke, added ${source.toUpperCase()} \`${key}\``);
    }

    @listener({ event: "ready" })
    setupPolling() {
        setInterval(() => this.pollComics(), 600000);
    }

    async pollComics() {
        for (let key in this.data.comics) {
            const comic = this.data.comics[key];
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
                comic.maxPageId = latest.id;
            }
        }
    }
}

interface PolledComic {
    source: ComicSource;
    url: string;
    maxPageId: number;
}
export interface ComicStore {
    comics: { [key: string]: PolledComic };
}
