import { hashSync } from "bcrypt";
import { randomBytes } from "crypto";
const sec = "ckDk_" + randomBytes(64).toString("base64").replace(/[^a-zA-Z0-9]/g, "");
console.log("Secret:", sec);
console.log("Bcrypt:", hashSync(sec, 10));
