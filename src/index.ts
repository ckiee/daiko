import { IscoolOptimizer } from "./optimizer";
import { IscoolScraper, msTimeToHuman } from "./scraper";
import twilio from "twilio";
import { dryRun, messagingServiceSid, phoneNumber, twilioAccountSid, twilioAuthToken } from "./env";

async function start() {
    const scraper = new IscoolScraper();
    const optimizer = new IscoolOptimizer();
    const sms = twilio(twilioAccountSid, twilioAuthToken);

    const { schedule, lessonTimes } = await scraper.fetch();
    const optimizedSchedule = schedule.map(x => x.map(y => optimizer.processSlot(y)));

    const now = new Date();
    const tomorrowIndex = (now.getDay() + 1) % 7; // 0-indexed

    if (tomorrowIndex == 6) return; // free day
    const lastSlotIndex = Math.max(...optimizedSchedule[tomorrowIndex]
        .map((x, i) => ({ i, len: x.length }))
        .filter(x => x.len > 0)
        .map(x => x.i));

    const foodNeeded = lessonTimes.map((range, i, arr) => {
        // lesson 0 is an exception for some kids
        // also end early if we've gone past the hours in this day
        if (i < 1 || i >= lastSlotIndex) return 0;
        const lastEnd = arr[i - 1].end;
        const diff = Math.abs(lastEnd - range.end); // abs just in case, we *shouldn't* have any time travel.
        const FIVEMIN = 300000;
        return <number>(diff > FIVEMIN ? 0.5 : 0.25); // small breaks don't have enough time to eat a full sandwich
    }).reduce((a, b) => a + b);

    const sendFn = dryRun ? console.log : sms.messages.create;
    sendFn({
        body: `${foodNeeded} needed sandwiches for lessons tomorrow until ${msTimeToHuman(lessonTimes[lastSlotIndex].end)}`,
        messagingServiceSid,
        to: phoneNumber
    });
}

start();
