import { init } from "./discord";

async function main() {
    const client = await init();
}
main().catch(err => { throw err; })
