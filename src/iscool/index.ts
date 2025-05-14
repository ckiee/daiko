import { IscoolOptimizer } from "./optimizer";
import { IscoolScraper, msTimeToHuman } from "./scraper";
import * as twilio from "twilio";
import { config } from "../config";
import { store } from "../store";

export async function getSchedule() {
    const scraper = new IscoolScraper();
    const optimizer = new IscoolOptimizer();

    const { schedule, lessonTimes } = await scraper.fetch();
    const optimizedSchedule = schedule.map(x => x.map(y => optimizer.processSlot(y)));
    return { schedule, lessonTimes, optimizedSchedule };
}

export async function sendSandwichMessage() {
    const { lessonTimes, optimizedSchedule } = await getSchedule();
    const sms = twilio(config.twilio.accountSid, config.twilio.authToken);
    const now = new Date();
    const tomorrowIndex = (now.getDay() + 1) % 7; // 0-indexed

    const lastSlotIndex = Math.max(...optimizedSchedule[tomorrowIndex]
        .map((x, i) => ({ i, len: x.length }))
        .filter(x => x.len > 0)
        .map(x => x.i));

    const foodNeeded = lessonTimes.map((range, i, arr) => {
        // lesson 0 is an exception for some kids
        // also end early if we've gone past the hours in this day
        if (i < 1 || i > lastSlotIndex) return 0;
        const lastEnd = arr[i - 1].end;
        const diff = Math.abs(lastEnd - range.start); // abs just in case, we *shouldn't* have any time travel.
        const FIVEMIN = 300000;
        return <number>(diff > FIVEMIN ? 0.5 : 0.25); // small breaks don't have enough time to eat a full sandwich
    }).reduce((a, b) => a + b);

    sms.messages.create({
        body: `${foodNeeded} needed sandwiches for lessons tomorrow until ${msTimeToHuman(lessonTimes[lastSlotIndex].end)}`,
        messagingServiceSid: config.twilio.messagingServiceSid,
        to: config.twilio.phoneNumber
    });
}

export function init() {
    const HOUR = 3.6e+6, SECOND = 1000;

    let lastExecutedMs = 0;
    setInterval(async () => {
        const now = new Date();
        // on every day other than friday, execute at 17:15 (5:15) if we didn't excecute within the last hour
        if (now.getDay() !== 5 && now.getHours() == 17 && now.getMinutes() == 15 && (Date.now() - lastExecutedMs) > HOUR) {
            if (store.iscool.sendSandwich)
                await sendSandwichMessage();
            lastExecutedMs = Date.now();
        }
    }, SECOND * 15)
}

export interface IscoolConfig {
    subdomain: string;
    classIndex: number;
}

export interface IscoolStore {
    sendSandwich: boolean;
}
