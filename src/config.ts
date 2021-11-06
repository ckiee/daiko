import { readFileSync } from "fs";
import { join } from "path";

interface DaikoConfig {
    production: boolean;
}

const CONFIG_FILE_PATH = join(process.cwd(), "config.json");

export const config: DaikoConfig = JSON.parse(readFileSync(CONFIG_FILE_PATH, "utf8"));
