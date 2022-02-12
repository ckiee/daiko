import { NextFunction, Request, Response } from "express";
import { bad } from "./errorHelpers";

const typeofs = typeof (undefined as any);

type SchemeV = { nullable: boolean, ty: typeof typeofs };
type Scheme = { [index: string]: SchemeV };

export function sch(ty: typeof typeofs) {
    return { nullable: false, ty };
}
export function schNl(ty: typeof typeofs) {
    return { nullable: true, ty };
}

export function validateBody(scheme: Scheme) {
    return async (req: Request, res: Response, next: NextFunction) => {
        if (typeof req.body !== "object") return bad("body must be JSON object", res);
        for (const key in scheme) {
            const val = scheme[key];
            if (!((val.nullable && (req.body[key] === undefined || req.body[key] === null)) ||
                typeof req.body[key] == scheme[key].ty))
                return bad(`body.${key} must be ${val.nullable ? "null or " : ""}${val.ty}`, res);
        }
        next();
    }
}
