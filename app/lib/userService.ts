import { NextResponse } from "next/server";
import Repository from "./db";
import { generateToken } from "./jwt";

export default class UserService {
    private repository:Repository;

    constructor (newRepository = new Repository()) {
        this.repository = newRepository;
    };

    login = async (email:string, password:string) => {
        const password_hash = password;
        const data = await this.repository.getUserInfo(email, password_hash);
        if (data.rowCount === 1) {
            const token = generateToken({id: data.rows[0].id, role: data.rows[0].role, name: data.rows[0].name.split(" ")[0]});
    
            const response = new NextResponse(
                JSON.stringify({message: "Login sucessful" }),{status: 200}
            );
    
            response.cookies.set("token", token, {
                httpOnly : true,
                maxAge: 3600,
                path: "/",
                secure: process.env.RUN_ENV === "production",
                sameSite: "lax"
            });
    
            return response;
        };
        throw new Error;
    };

    logout = async () => {
        const response = new NextResponse(
            JSON.stringify({message: "Logout sucessful" }),{status: 200}
        );
    
        response.cookies.set("token", "", {
            httpOnly : true,
            maxAge: -1,
            path: "/",
            secure: process.env.RUN_ENV === "production",
        });
    
        return response;
    };
}