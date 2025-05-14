import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { config } from "../config";
// cell = single thing in time slot
// slot = single time slot

export class IscoolScraper {
    public constructor(private classIndex: number = config.iscool.classIndex) {}
    async fetchHtml() {
        const res = await fetch(`https://${config.iscool.subdomain}.iscool.co.il/default.aspx`, {
            "headers": {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:92.0) Gecko/20100101 Firefox/92.0",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "multipart/form-data; boundary=---------------------------252371569425890445663172039469",
                "Upgrade-Insecure-Requests": "1",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-User": "?1",
                "Cookie": "tablecls=×^y - 7; language=en-US"
            },
            "body": `-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"__EVENTTARGET\"

dnn$ctr18597$TimeTableView$btnChangesTable
-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"__EVENTARGUMENT\"


-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"__LASTFOCUS\"


-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"__VIEWSTATE\"

/wEPDwUIMjU3MTQzOTcPZBYGZg8WAh4EVGV4dAU+PCFET0NUWVBFIEhUTUwgUFVCTElDICItLy9XM0MvL0RURCBIVE1MIDQuMCBUcmFuc2l0aW9uYWwvL0VOIj5kAgEPZBYMAgEPFgIeB1Zpc2libGVoZAICDxYCHgdjb250ZW50BSjXqteZ15vXldefINee15jXqNeVLdeV15XXodeYINeo16LXoNeg15QgZAIDDxYCHwIFN9eq15nXm9eV158g157XmNeo15Ut15XXldeh15gg16jXoteg16DXlCAsRG90TmV0TnVrZSxETk5kAgQPFgIfAgUg15vXnCDXlNeW15vXldeZ15XXqiDXqdee15XXqNeV16pkAgUPFgIfAgULRG90TmV0TnVrZSBkAgYPFgIfAgUo16rXmdeb15XXnyDXnteY16jXlS3XldeV16HXmCDXqNei16DXoNeUIGQCAg9kFgJmD2QWAgIED2QWAmYPZBYGAgIPZBYCZg8PFgYeCENzc0NsYXNzBQtza2luY29sdHJvbB4EXyFTQgICHwFoZGQCAw9kFgJmDw8WBh8DBQtza2luY29sdHJvbB8ABQVMb2dpbh8EAgJkZAIKD2QWAgICD2QWCAIBDw8WAh8BaGRkAgMPDxYCHwFoZGQCBQ9kFgICAg8WAh8BaGQCBw9kFgICAQ9kFgICAQ9kFggCBg9kFgJmD2QWDAICDxYCHgVjbGFzcwUKSGVhZGVyQ2VsbGQCBA8WAh8FBQpIZWFkZXJDZWxsZAIGDxYCHwUFCkhlYWRlckNlbGxkAggPFgIfBQUKSGVhZGVyQ2VsbGQCCg8WAh8FBQpIZWFkZXJDZWxsZAIMDxYCHwUFEEhlYWRlckNlbGxCdXR0b25kAgcPEGQQFQAVABQrAwBkZAIMD2QWAmYPZBYaZg9kFgICAQ8QZBAVIgbXmSAtIDEG15kgLSAyBteZIC0gMwbXmSAtIDQG15kgLSA1BteZIC0gNgbXmSAtIDcG15kgLSA4BteZIC0gOQfXmSAtIDEwB9eZIC0gMTEI15nXkCAtIDEI15nXkCAtIDII15nXkCAtIDMI15nXkCAtIDQI15nXkCAtIDUI15nXkCAtIDYI15nXkCAtIDcI15nXkCAtIDgI15nXkCAtIDkJ15nXkCAtIDEwCdeZ15AgLSAxMQnXmdeQIC0gMTII15nXkSAtIDEI15nXkSAtIDII15nXkSAtIDMI15nXkSAtIDQI15nXkSAtIDUI15nXkSAtIDYI15nXkSAtIDcI15nXkSAtIDgI15nXkSAtIDkJ15nXkSAtIDEwCdeZ15EgLSAxMRUiATEBMgEzATQBNQE2ATcBOAE5AjQ5AjU1AjExAjEyAjEzAjE0AjE1AjE2AjE3AjE4AjE5AjI5AjU0AjU3AjIwAjIxAjIyAjIzAjI0AjI1AjI2AjI3AjI4AjQ0AjU2FCsDImdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAQIGZAICDxYEHwUFCkhlYWRlckNlbGwfAWhkAgMPFgIfAWhkAgQPFgIfBQUKSGVhZGVyQ2VsbGQCBg8WAh8FBQpIZWFkZXJDZWxsZAIIDxYCHwUFCkhlYWRlckNlbGxkAgoPFgIfBQUKSGVhZGVyQ2VsbGQCDA8WAh8FBQpIZWFkZXJDZWxsZAIODxYCHwUFCkhlYWRlckNlbGxkAhAPFgIfBQUKSGVhZGVyQ2VsbGQCEg8WBB8FBQpIZWFkZXJDZWxsHwFoZAITDxYCHwFoZAIUDxYCHwUFEEhlYWRlckNlbGxCdXR0b25kAg8PDxYCHwAFO9ee16LXldeT15vXnyDXnDogMDUuMTAuMjAyMSwg16nXoteUOiAxNjozMSwg157XodeaOiBBMTE4NTk3ZGRkgiRL0/2UatY4LIEibm3K+uY8Y/A=
-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"__VIEWSTATEGENERATOR\"

CA0B0334
-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"dnn$ctr18597$TimeTableView$ClassesList\"

${this.classIndex}
-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"dnn$ctr18597$TimeTableView$ControlId\"


-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"ScrollTop\"


-----------------------------252371569425890445663172039469
Content-Disposition: form-data; name=\"__dnnVariable\"


-----------------------------252371569425890445663172039469--
`,
            "method": "POST"
        });
        return await res.text();
    }

    async fetch() {
        const html = await this.fetchHtml();
        const $ = cheerio.load(html);
        // 6 school days, 15 lessons max per day
        const schedule: LessonCell[][][] = Array(6).fill(0).map(_ => Array(15).fill(0).map(_ => []));
        const rows = $("#dnn_ctr18597_TimeTableView_PlaceHolder .TTTable tbody").children();
        rows.each((i, tr) => {
            $(tr).children(".TTCell").each((j, cell) => {
                schedule[j][i - 1].push(...(cellScrapers.map(s => s(cell, $)).reduce((a, b) => [...a, ...b])));
            });
        });

        // 15 lessons max every day, timings same every day.
        const lessonTimes: TimeRange[] = Array(15);
        $("td.CName").each((slotIndex, parentEle) => {
            $(parentEle).children().first().children(".hour-time").each((pairIndex, ele) => {
                const timing = parseTime($(ele).text());
                if (pairIndex == 0) lessonTimes[slotIndex] = { start: timing, end: 0 };
                else if (pairIndex == 1) lessonTimes[slotIndex].end = timing;
            });
        });

        return { schedule, lessonTimes };
    }
}

// parseTime("12:05") -> 123000
export function parseTime(str: string) {
    const [hour, min] = str.split(":").map(x => parseInt(x, 10));
    return hour * 3.6e+6 + min * 60000;
}

export function msTimeToHuman(ms: number) {
    return`${~~(ms / 3.6e+6)}:${~~((ms % 3.6e+6) / 60000)}`;
};

export interface TimeRange {
    // ms, epoch start of day
    start: number;
    end: number;
}

export type LessonCell = BaseLessonCell & (StdLessonCell | LocationChangeLessonCell | EventLessonCell | ExamLessonCell | FreeLessonCell);

export interface BaseLessonCell {
    type: string;
}

export interface StdLessonCell {
    type: "std";
    subject: string;
    location?: string;
    teacher?: string;
}

export interface LocationChangeLessonCell {
    type: "change";
    teacher: string;
    location: string;
}

export interface FreeLessonCell {
    type: "free";
    subject: string;
    teacher: string;
}

export interface EventLessonCell {
    type: "event";
    event: string;
    location: string;
}

export interface ExamLessonCell {
    type: "exam";
    data: string;
}

const cellScrapers: ((cell: cheerio.Element, root: cheerio.Root) => LessonCell[])[] = [
    ((cell, $) => {
        const cellHtmlRegex = /<b>(.+)<\/b>(?:(?:&nbsp;){2}\((.+)\))?<br>(.+)/;
        const lessons: LessonCell[] = [];

        $(cell).children(".TTLesson").each((__, lesson) => {
            const cellHtml = $(lesson).html();

            if (!cellHtml) return;
            let [_, subject, location, teacher] = cellHtmlRegex.exec(cellHtml) || [];
            lessons.push({ type: "std", subject, location, teacher });
        });

        return lessons;
    }),

    ((cell, $) => {
        const cellHtmlRegex = /(.+) -&gt; חדר: (.+)/;
        const cellHtml = $(cell).children("table").children("tbody").children("tr").children(".TableFillChange").html();
        if (!cellHtml) return [];
        let [_, teacher, location] = cellHtmlRegex.exec(cellHtml) || [];
        return [{ type: "change", teacher, location }];
    }),

    ((cell, $) => {
        const cellHtmlRegex = /(.+), (.+)/;
        const cellHtml = $(cell).children("table").children("tbody").children("tr").children(".TableEventChange").html();
        if (!cellHtml) return [];
        let [_, event, location] = cellHtmlRegex.exec(cellHtml) || [];
        return [{ type: "event", event, location }];
    }),

    ((cell, $) => {
        const cellText = $(cell).children("table").children("tbody").children("tr").children(".TableExamChange").text();
        if (!cellText) return [];
        return [{ type: "exam", data: cellText }];
    }),

    ((cell, $) => {
        const cellHtmlRegex = /ביטול (.+), (.+)/;
        const cellHtml = $(cell).children("table").children("tbody").children("tr").children(".TableFreeChange").html();
        if (!cellHtml) return [];
        let [_, subject, teacher] = cellHtmlRegex.exec(cellHtml) || [];
        return [{ type: "free", subject, teacher }];
    })
];
