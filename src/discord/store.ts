import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";
import { ComicStore } from "./modules/comic";

interface Store { comic: ComicStore }

const STORE_FILE_PATH = join(process.cwd(), "store.json");

if (!existsSync(STORE_FILE_PATH)) saveToDisk({
    comic: { comics: {} }
});
export const store: Store = JSON.parse(readFileSync(STORE_FILE_PATH, "utf8"));

function saveToDisk(st: Store) {
    writeFileSync(STORE_FILE_PATH, JSON.stringify(st), "utf8");
}

setInterval(() => saveToDisk(store), 15000);
process.on("beforeExit", () => saveToDisk(store));
