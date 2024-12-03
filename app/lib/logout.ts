//Function to Logout Button on Client Side

import { app_root } from "./root";

export default async function UserLogout() {
    await fetch (`${app_root}/api/logout`, {method: "POST"});
}