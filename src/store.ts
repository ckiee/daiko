import { readFileSync, writeFileSync, existsSync, renameSync } from "fs";
import { join } from "path";
import { DiscordStore } from "./discord";

interface DaikoStore {
    discord: DiscordStore
}


const STORE_FOLDER_PATH = process.cwd();
const STORE_FILE_PATH = join(STORE_FOLDER_PATH, "store.json");

if (!existsSync(STORE_FILE_PATH)) saveToDisk({
    discord: {
        comic: { comics: {} },
        reminder: { reminders: {} }
    }
});

export const store: DaikoStore = JSON.parse(readFileSync(STORE_FILE_PATH, "utf8"));

function saveToDisk(st: DaikoStore) {
    // semi-atomically save in case something breaks mid-save
    writeFileSync(join(STORE_FOLDER_PATH, "store.json.new"), JSON.stringify(st), "utf8");
    renameSync(STORE_FILE_PATH, join(STORE_FOLDER_PATH, "store.json.old"));
    renameSync(join(STORE_FOLDER_PATH, "store.json.new"), STORE_FILE_PATH);
}

setInterval(() => saveToDisk(store), 500);
process.on("beforeExit", () => saveToDisk(store));
