
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../lib/jwt";

export const withSession = (handler: Function) =>
    async (request: NextRequest, response: NextResponse) => {
        const token = request.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json({message: "Unauthorized"}, {status: 401});
        }

        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json({message: "Invalid or expired token"}, {status: 401});
        }

        (request as any).user = decoded;
        return handler(request, response);
    };