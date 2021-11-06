import { EventLessonCell, FreeLessonCell, LessonCell, LocationChangeLessonCell, StdLessonCell } from "./scraper";

export class IscoolOptimizer {
    processSlot(slot: LessonCell[]) {
        const cancelledSubjects = slot.filter(c => c.type == "free").map(c => (<FreeLessonCell>c).subject);
        const locationChanges = <LocationChangeLessonCell[]>slot.filter(c => c.type == "change");
        const events = <EventLessonCell[]>slot.filter(c => c.type == "event");
        const stds = (<StdLessonCell[]>slot.filter(c => c.type == "std"
            && !cancelledSubjects.includes(c.subject)))
            .map(c => {
                const applicable = locationChanges.filter(l => l.teacher == c.teacher)[0];
                if (applicable) c.location = applicable.location;
                return c;
            }).concat(events.map(e => {
                return <StdLessonCell>{
                    subject: e.event, location: e.location
                }
            }));

        return stds;
    }
}
