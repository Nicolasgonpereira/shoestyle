"use server";

import UserService from "@/app/lib/userService";
import { NextRequest, NextResponse } from "next/server";

const userService = new UserService;

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    try {
        const result = await userService.login(email, password);
        return result;
    } catch {
        return NextResponse.json({message: "Invalid credentials"}, {status:401});
    }



}