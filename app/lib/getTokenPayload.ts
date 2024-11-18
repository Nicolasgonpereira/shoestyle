"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { User } from "../context/userContext/userContext";
import { SECRET_KEY } from "./jwt";

export default async function getTokenPayload(): Promise<User | null> {
    const CookieStore = await cookies();
    const token = await CookieStore.get("token")?.value;
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as User;
        return decoded;
    } catch {
        return null;
    }
}