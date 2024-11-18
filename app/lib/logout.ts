//Function to Logout Button on Client Side

export default async function UserLogout() {
    await fetch ("http://localhost:3000/api/logout", {method: "POST"});
}