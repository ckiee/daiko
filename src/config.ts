import { readFileSync } from "fs";
import { join } from "path";
import { ArpConfig } from "./api/arp";
import { DavConfig } from "./api/dav";
import { PluralKitConfig } from "./api/pk";
import { DiscordConfig } from "./discord";
import { IscoolConfig } from "./iscool";
import { WebConfig } from "./web";

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
    pluralkit: PluralKitConfig;
    arp: ArpConfig;
    web: WebConfig;
    dav: DavConfig;
}

const CONFIG_FILE_PATH = join(process.cwd(), "config.json");

export const config: DaikoConfig = JSON.parse(readFileSync(CONFIG_FILE_PATH, "utf8"));
