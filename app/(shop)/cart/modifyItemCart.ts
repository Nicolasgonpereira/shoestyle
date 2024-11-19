"use server";

import { ICartItems } from "@/app/context/userContext/userContext";
import { revalidateTag } from "next/cache";

export default async function modifyItemCart(user_id:string | undefined, cart_id:number, idProductOnCart:number, quantity:number) {
    if (user_id) {
        const result:ICartItems = await fetch ("http://localhost:3000/api/cart",{
            method:"PUT",
            body: JSON.stringify({
                "user_id":user_id,
                "cart_id":cart_id,
                "idProductOnCart":idProductOnCart,
                "quantity":quantity
            }),
        }).then(res=>res.json());
        revalidateTag("cartFetch");
        console.log(result)
        return result;
    }
    return null;
}