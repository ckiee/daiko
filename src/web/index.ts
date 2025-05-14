import { default as express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { config as globalConfig } from "../config";
import { logger } from "../logger";
import { IAMConfig } from "./authn";
import { lastx, LastXStore } from "./lastx";
import { triggerDispatch } from "../mattermost/action";

const config = globalConfig.web;

export function init() {
    const app = express();
    app.use(helmet());
    app.use(morgan("combined"))
    app.use(express.json());

    app.get("/", (req, res) => {
        res.json({ message: "Hey.. whatcha doing here?!" });
    });

    app.use("/lastx", lastx());

    app.post("/mattermost-action", async (req, res) => {
        res.json(await triggerDispatch.handler(req.body));
    });

    app.use((req, res, next) => {
        res.sendStatus(404);
    });
    const port = parseInt(process.env.WEB_PORT!, 10) || config.port;
    app.listen(port, () => logger.info(`listening on port ${port}`));
}

export interface WebConfig {
    port: number;
    iam: IAMConfig;
    base: string; // For incoming webhooks..
}

export interface WebStore {
    lastx: LastXStore
}
