import { commands } from "..";
import { store } from "../../store";

const thisStore = store.mattermost.friends;

commands.frmtx = async ({ reply, rest }) => {
    const users = Object.keys(JSON.parse(rest));
    if (users.some((mxid) => !mxid.match(/^@.+:./)))
        throw new Error(
            "doesn't look like m.direct event content (Element: /devtools → Explore account data…)"
        );

    thisStore.people.push(
        ...users.map(
            (mxid) => ({ source: "matrix", id: mxid, name: mxid } as const)
        )
    );

    await reply({ message: `imported ${users.length} people` });
};
