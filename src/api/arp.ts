import fetch, { FetchError } from "node-fetch"
import { chunk } from "../util/chunk";

// This gets an ARP table from a DD-WRT router
export async function getArpTable() {
    const res = await fetch("http://darcher.atori/Status_Lan.live.asp", {
        headers: {
            "User-Agent": "daiko",
            "Authorization": "Basic secret_was_invalid_anyway"
        }
    });
    if (!res.ok) throw new Error("darcher request failed with " + res.status);
    const text = await res.text();
    const arp = chunk((/{arp_table:: (.+'\w+')}/.exec(text) || [])[1]
                          .split(",")
                          .map(s => ((/^\s*'(.+)'\s*$/.exec(s)||[])[1])), 4)
        .map(([hostname, ip, mac, conns, iface]) => ({ hostname, ip, mac, conns, iface }));
    return arp;
}

getArpTable().then(console.log);
