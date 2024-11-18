"use server";

import { revalidateTag } from "next/cache";

export default async function modifyItemCart(user_id:string | undefined, cart_id:number, idProductOnCart:number, quantity:number) {
    if (user_id) {
        await fetch ("http://localhost:3000/api/cart",{
            method:"PUT",
            body: JSON.stringify({
                "user_id":user_id,
                "cart_id":cart_id,
                "idProductOnCart":idProductOnCart,
                "quantity":quantity
            }),
        });
        revalidateTag("cartFetch");
    }
}