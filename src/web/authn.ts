import { compare } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { config } from "../config";
import { bad, forbid } from "./errorHelpers";

export function authenticationCheck(level: AuthLevel) {
    return async (req: Request, res: Response, next: NextFunction) => {
        if (typeof req.headers.authorization !== "string") return bad("no authorization header", res)

        const [prefix, token] = req.headers.authorization.split(" ");
        if (prefix !== "Bearer") return bad("no bearer prefix", res);

        for (const encrypted in config.web.iam) {
            if (await compare(token, encrypted)) {
                if (config.web.iam[encrypted].level == "ro" && level == "rw") return forbid("token is read-only", res);
                return next();
            }
        }

        forbid("bad token", res);
    }
}

type AuthLevel = "ro" | "rw";
export type IAMConfig = { [token: string]: { level: AuthLevel } }
