import { init } from "./discord";
import dotenv from "dotenv-safe";
import { config } from "./config";
import readline from "readline";
import { inspect } from "util";

async function main() {
    dotenv.config();
    const client = await init();

    if (!config.production) {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        function prompt(): Promise<string> {
            return new Promise(resolve => {
                rl.question("> ", answer => resolve(answer));
            })
        }
        while (true) {
            const js = await prompt();
            console.log(inspect(eval(js), false, 2, true));
        }
    }

}

main().catch(err => { throw err; })
