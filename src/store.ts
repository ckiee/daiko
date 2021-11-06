import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { DiscordStore } from "./discord";

interface DaikoStore {
    discord: DiscordStore
}

const STORE_FILE_PATH = join(process.cwd(), "store.json");

if (!existsSync(STORE_FILE_PATH)) saveToDisk({
    discord: {
        comic: { comics: {} },
        reminder: { reminders: {} }
    }
});

export const store: DaikoStore = JSON.parse(readFileSync(STORE_FILE_PATH, "utf8"));

function saveToDisk(st: DaikoStore) {
    writeFileSync(STORE_FILE_PATH, JSON.stringify(st), "utf8");
}

setInterval(() => saveToDisk(store), 500);
process.on("beforeExit", () => saveToDisk(store));
