import { init as webInit } from "./web";

async function main() {
    // const discord = await discordInit();
    // iscoolInit();
    webInit();
    await import("./mattermost");

    return {
        // discord
    };
}

export const mainPromise = main().catch((err) => {
    throw err;
});
