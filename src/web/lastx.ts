import { Router } from "express";
import { store } from "../store";
import { authenticationCheck } from "./authn";
import { bad } from "./errorHelpers";
import { sch, schNl, validateBody } from "./validator";

export function lastx() {
    const app = Router();

    app.get("/", authenticationCheck("ro"), (req, res) => {
        res.json({ data: store.web.lastx });
    });

    app.get("/human", (req, res) => {
        const last = (a: number[]) => a.slice(-1)[0];
        const sleepUnix = last(store.web.lastx.sleep);
        const wakeUnix = last(store.web.lastx.wake);
        if (sleepUnix < wakeUnix) {
            return res.json({ message: `awake since ${new Date(wakeUnix)}` });
        } else {
            return res.json({ message: `asleep since ${new Date(sleepUnix)}` });
        }
    });

    app.post("/",
        authenticationCheck("rw"),
        validateBody({ target: sch("string"), dateTime: sch("string") }),
        (req, res) => {
            const { target, dateTime } = req.body as { target: string, dateTime: string; };
            if (target == "shower" || target == "wake" || target == "sleep") {
                const date = new Date(dateTime).getTime();
                if (isNaN(date)) return bad("invalid dateTime", res);
                store.web.lastx[target].push(date);
                res.json({ message: "ok" });
            } else {
                return bad("unknown target", res);
            }
        });

    return app;
}


export interface LastXStore {
    // unix times
    wake: number[];
    shower: number[];
    sleep: number[];
}
