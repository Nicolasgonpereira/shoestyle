
import jwt from "jsonwebtoken";

export const SECRET_KEY = process.env.JWT_SECRET || "bla";

export function generateToken (payload: object) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
};

export function verifyToken (token: string) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    };
};