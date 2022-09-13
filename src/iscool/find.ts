import { IscoolOptimizer } from "./optimizer";
import { IscoolScraper, msTimeToHuman, StdLessonCell } from "./scraper";

async function getGilads(classIndex: number) {
    const scraper = new IscoolScraper(classIndex);
    const optimizer = new IscoolOptimizer();

    console.log(`fetching class #${classIndex}`);
    const { schedule } = await scraper.fetch();
    return schedule[1][4].filter(l => l.type == "std" && l.teacher && l.teacher.includes("גלעד"));
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

async function main() {
    const classes = [1,2,3,4,5,6,7,8,9,49,55,11,12,13,14,15,16,17,18,19,29,54,57,58,20,21,22,23,24,25,26,27,28,44,56];
    const res = (await Promise.all(classes.map(async i => {
        const gilads = await getGilads(i);
        await sleep(500);
        return gilads;
    }))).reduce((a, b) => [...a,...b])
    console.log(res);
}

main();
