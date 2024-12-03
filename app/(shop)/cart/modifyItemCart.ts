"use server";

import { ICartItems } from "@/app/context/userContext/userContext";
import { app_root } from "@/app/lib/root";
import { revalidateTag } from "next/cache";

export default async function modifyItemCart(user_id:string | undefined, cart_id:number, idProductOnCart:number, quantity:number) {
    if (user_id) {
        const result:ICartItems = await fetch (`${app_root}/api/cart`,{
            method:"PUT",
            body: JSON.stringify({
                "user_id":user_id,
                "cart_id":cart_id,
                "idProductOnCart":idProductOnCart,
                "quantity":quantity
            }),
        }).then(res=>res.json());
        revalidateTag("cartFetch");
        return result;
    }
    return null;
}