import { init as discordInit } from "./discord";
import { init as iscoolInit } from "./iscool";
import { init as webInit } from "./web";

async function main() {
    const discord = await discordInit();
    iscoolInit();
    webInit();

    return { discord };
}

export const mainPromise = main().catch(err => { throw err; });
