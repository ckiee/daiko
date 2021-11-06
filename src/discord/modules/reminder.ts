import {
	command, default as CookiecordClient,
	listener, Module
} from "cookiecord";
import { Message } from "discord.js";
import parse from "parse-duration";
import prettyMs from "pretty-ms";
import { store } from "../../store";
import { v4 as uuid } from "uuid";

export default class ReminderModule extends Module {
	private store = store.discord.reminder;
	constructor(client: CookiecordClient) {
		super(client);
	}

	@listener({ event: "ready" })
	async loadPrevReminders() {
		for (const rem of Object.values(this.store.reminders)) {
			setTimeout(
				() =>
					this.sendReminder(rem).catch(err => {
						throw err;
					}),
				rem.date - Date.now()
			);
		}
	}

	@command({ single: true })
	async remind(msg: Message, args: string) {
		// cookiecord can't have args with spaces in them (yet)
		const splitArgs = args.split(" ").filter(x => x.trim().length !== 0);
		if (splitArgs.length == 0)
			return await msg.channel.send(
				":warning: syntax: !remind <duration> [message]"
			);
		const maxDur = parse("10yr");
		const dur = parse(splitArgs.shift()!); // TS doesn't know about the length check
		if (!dur || !maxDur || dur > maxDur)
			return await msg.channel.send(":warning: invalid duration!");
		const rem: Reminder = {
			id: uuid(),
			userId: msg.author.id,
			date: Date.now() + dur,
			message: splitArgs.join(" ")
		};

		if (rem.message?.trim().length == 0) rem.message = undefined;

		this.store.reminders[rem.id] = rem;

		if (splitArgs.length == 0) {
			await msg.channel.send(
				`:ok_hand: set a reminder for ${prettyMs(dur)}.`
			);
		} else {
			await msg.channel.send(
				`:ok_hand: set a reminder for ${prettyMs(
					dur
				)} to remind you about "${splitArgs.join(" ")}".`
			);
		}

		// set the timeout, bot will take all the reminders from the DB on init if interrupted while a reminder is still pending
		setTimeout(
			() =>
				this.sendReminder(rem).catch(err => {
					throw err;
				}),
			dur
		);
	}

	@command()
	async reminders(msg: Message) {
		const userReminders = Object.values(this.store.reminders).filter(rem => rem.userId == msg.author.id);
		if (userReminders.length == 0) {
			await msg.reply("You have no reminders ):");
		} else {
			await msg.reply({
				embeds: [{
					title: `Your Reminders (${userReminders.length})`,
					description: userReminders.map(rem => `- \`${rem.message || "No message provided"}\` in ${prettyMs(rem.date - Date.now())}`).join("\n")
				}]
			})
		}
	}

	async sendReminder(rem: Reminder) {
		const user = await this.client.users.fetch(rem.userId);
		if (!rem.message) {
			user.send(":clock1: hey! you asked me to remind you.");
		} else {
			user.send(
				`:clock1: hey! you asked me to remind you about "${rem.message}"`
			);
		}
		delete this.store.reminders[rem.id];
	}
}

interface Reminder {
	id: string;
	userId: string;
	date: number;
	message?: string;
}

export interface ReminderStore {
	reminders: { [key: string]: Reminder }
}
