import { default as express } from "express";
import helmet from "helmet";
import { config as globalConfig } from "../config";
import { logger } from "../logger";
import { IAMConfig } from "./authn";
import { lastx, LastXStore } from "./lastx";

const config = globalConfig.web;


export function init() {
    const app = express();
    app.use(helmet());
    app.use(express.json());

    app.get("/", (req, res) => {
        res.json({ message: "Hey.. whatcha doing here?!" });
    });

    app.use(lastx());

    app.use((req, res, next) => {
        res.sendStatus(404);
    });
    app.listen(config.port, () => logger.info(`listening on port ${config.port}`));
}

export interface WebConfig {
    port: number;
    iam: IAMConfig;
}

export interface WebStore {
    lastx: LastXStore
}
