import { init } from "./discord";
import dotenv from "dotenv-safe";

async function main() {
    dotenv.config();
    const client = await init();
}

main().catch(err => { throw err; })
