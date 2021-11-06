import { readFileSync } from "fs";
import { join } from "path";
import { DiscordConfig } from "./discord";
import { IscoolConfig } from "./iscool";

interface TwilioConfig {
    accountSid: string;
    authToken: string;
    messagingServiceSid: string;
    phoneNumber: string;
}

interface DaikoConfig {
    production: boolean;
    twilio: TwilioConfig;
    discord: DiscordConfig;
    iscool: IscoolConfig;
}

const CONFIG_FILE_PATH = join(process.cwd(), "config.json");

export const config: DaikoConfig = JSON.parse(readFileSync(CONFIG_FILE_PATH, "utf8"));
