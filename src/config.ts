import { readFileSync } from "fs";
import { join } from "path";
import { ComicConfig } from "./discord/modules/comic";

interface DaikoConfig {
    production: boolean;
    comic: ComicConfig;
}

const CONFIG_FILE_PATH = join(process.cwd(), "config.json");

export const config: DaikoConfig = JSON.parse(readFileSync(CONFIG_FILE_PATH, "utf8"));
