import { config } from "./config";
import { store } from "./store"; // for eval ctx
import readline from "readline";
import { inspect } from "util";
import { logger } from "./logger";

export async function repl() {
    if (!config.production) {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        function prompt(): Promise<string> {
            return new Promise(resolve => {
                rl.question("> ", answer => resolve(answer));
            })
        }
        while (true) {
            const js = await prompt();
            try {
                console.log(inspect(eval(js), false, 2, true));
            } catch (err: unknown) {
                logger.error(err);
            }
        }
    }
}
