import UserService from "@/app/lib/userService";

const userService = new UserService;

export async function POST() {
    return await userService.logout();
};