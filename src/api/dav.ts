import { createDAVClient, DAVClient, DAVCredentials } from "tsdav";
import { config } from "../config"

export interface DavConfig {
    serverUrl: string;
    // use: credentials: {username: 'YOUR_APPLE_ID', password: 'YOUR_APP_SPECIFIC_PASSWORD',}, authMethod: 'Basic',
    credentials: DAVCredentials;
    authMethod?: "Basic" | "Oauth" | "Digest" | "Custom";
}

export const dav = (async () => {
    const client = new DAVClient({
        serverUrl: config.dav.serverUrl,
        credentials: config.dav.credentials,
    });

    await client.login();
    return client;
})();
