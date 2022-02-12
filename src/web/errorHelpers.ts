import { Response } from "express";

export const bad = (m: string, res: Response) => {
    res.status(400);
    res.json({ message: m });
}

export const notfoun = (m: string, res: Response) => {
    res.status(404);
    res.json({ message: m });
}


export const forbid = (m: string, res: Response) => {
    res.status(403);
    res.json({ message: m });
}
