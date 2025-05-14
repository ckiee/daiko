import { MessageAttachment } from "@mattermost/types/message_attachments";
import { commands } from "..";
import { dav } from "../../api/dav";
import { parseVCards } from "vcard4-ts";
import { endpoint, forgeryToken, triggerDispatch } from "../action";
import { store } from "../../store";

await import("./matrix");

export interface Person {
    source: "dav" | "matrix";
    id: string;
    review?: boolean;
    name: string;
}

export interface FriendsStore {
    people: Person[];
}

const thisStore = store.mattermost.friends;

commands.fr = async ({ reply }) => {
    const books = await dav.fetchAddressBooks();
    const vcfs = await dav.fetchVCards({ addressBook: books[0] });
    const vcards = vcfs.map((c) => parseVCards(c.data).vCards![0]!);

    // import all vcards
    vcards.map((card) => {
        let person = thisStore.people.find((c) => c.id == card.UID?.value);
        if (!person) {
            person = {
                id: card.UID!.value,
                source: "dav",
                name: card.FN![0].value,
            };
            thisStore.people.push(person);
        }
    });

    // propgate deletes
    thisStore.people = thisStore.people.filter((p) =>
        p.source == "dav" ? vcards.find((c) => c.UID?.value == p.id) : true
    );

    while (thisStore.people.some((p) => p.review === undefined)) {
        const peeps = thisStore.people.filter((p) => p.review === undefined)!;
        const person = peeps[0];

        const rep = await reply({
            thread: true,
            props: {
                attachments: <MessageAttachment[]>[
                    {
                        fallback: "Interactive person selcetion",
                        color: "#ff67ac",
                        author_name: `Select people to include in tracking (${peeps.length} left)`,
                        title: `${person?.name}`,
                        // image_url:
                        //     "https://mattermost.com/wp-content/uploads/2022/02/icon_WS.png",
                        actions: [
                            {
                                id: "accept",
                                name: "accept",
                                type: "button",
                                style: "success",
                                integration: {
                                    url: endpoint,
                                    context: {
                                        action: "accept",
                                        forgeryToken,
                                    },
                                },
                            },
                            {
                                id: "deny",
                                name: "deny",
                                type: "button",
                                style: "danger",
                                integration: {
                                    url: endpoint,
                                    context: {
                                        action: "deny",
                                        forgeryToken,
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        });
        const t = await triggerDispatch.on(rep, async (t) => ({
            update: {
                message: `__${
                    t.context.action == "accept" ? "Accepted" : "Denied"
                }:__ ${person?.name}`,
                props: { attachments: {} },
            },
        }));

        person.review = t.context.action == "accept";
    }

    await reply({
        message: `all caught up! — ${thisStore.people.length} people known.`,
    });
};
