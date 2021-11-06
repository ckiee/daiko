import { load } from "cheerio";
import fetch from "node-fetch";
import { URL } from "url";
import { logger } from "../logger";

export type ComicSource = keyof typeof fetchers;
export type ComicFetcher = (_: URL) => () => Promise<ComicMetadata>;

interface ComicPage {
    title: string;
    url: string;
    id: number;
}
interface ComicMetadata {
    title: string;
    bannerURL: string; // not actually consistently banner, but we started off with a banner.
    pages: ComicPage[];
}

export function isComicSource(val: string): val is ComicSource {
    return Object.keys(fetchers).includes(val);
}

export const fetchers = {
    comicfury: <ComicFetcher>function makeComicfuryFetcher(comicUrl: URL) {
        return async function fetchComicfury() {
            const url = new URL(comicUrl.toString());
            url.pathname = "archive";
            logger.trace(`GET ${url}`);
            const res = await fetch(url);
            const html = await res.text();
            const $ = load(html);
            let pages: ComicPage[] = [];

            $(".archivecomic > a").each((_, e) => {
                const url = new URL(comicUrl.toString());
                const rawUrl = $(e).attr("href");
                if (!rawUrl || rawUrl.trim() == "") return;
                url.pathname = rawUrl;
                const title = $(e).text();
                pages.push({
                    title,
                    url: url.toString(),
                    id: parseInt(rawUrl.split("/")[2], 10),
                });
            });

            pages = pages.sort((a, b) => a.id - b.id);

            const bannerURL = $("div#banner img").attr("src");
            const title = $("h1#sitetitle").text().trim();

            if (!bannerURL || !title)
                throw new Error("Failed to parse archive page meta");

            return {
                pages,
                bannerURL,
                title,
            };
        };
    },
    webtoons: <ComicFetcher>function makeWebtoonsFetcher(comicUrl: URL) {
        return async function fetchWebtoons() {
            const url = new URL(comicUrl.toString());
            url.pathname = [...url.pathname.split("/").slice(0, 4), "list"].join("/");
            url.searchParams.delete("episode_no");
            logger.trace(`GET ${url}`);
            const res = await fetch(url, {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0",
                    Accept:
                        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8",
                    "Accept-Language": "en-US,en;q=0.5",
                    Cookie:
                        "locale=en; timezoneOffset=+2; pagGDPR=true; atGDPR=AD_CONSENT; rw=c_349416_6; needGDPR=true; needCCPA=false; needCOPPA=false; countryCode=AT; tpamGDPR=; tpaaGDPR=",
                },
            });
            const html = await res.text();
            const $ = load(html);
            let pages: ComicPage[] = [];

            $("#_listUl > li > a").each((_, e) => {
                const url = $(e).attr("href");
                if (!url || url.trim() == "") return;
                const title = $(e).children(".subj").text();
                const parsedURL = new URL(url);
                pages.push({
                    url,
                    title,
                    id: parseInt(parsedURL.searchParams.get("episode_no") || "", 10),
                });
            });

            pages = pages.sort((a, b) => a.id - b.id);

            const bannerURL = $(".detail_header > .thmb > img").attr("src");
            const title = $(".detail_header .info .subj").text().trim();

            if (!bannerURL || !title)
                throw new Error("Failed to parse archive page meta");

            return {
                pages,
                bannerURL,
                title,
            };
        };
    },
} as const;
