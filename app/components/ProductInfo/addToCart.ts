"use client";

import { revalidateTag } from "next/cache";

export default async function addItemToCart (user_id: string = "1",product_id:string,selectedColor:string,selectedSize:string | undefined) {
    
    await fetch(`/api/cart?user_id=${user_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "user_id":1,
            "product_id":product_id,
            "variant":{
                "size":selectedSize,
                "color":selectedColor,
            },
            "cart_id":"10",
        }),
    });
    revalidateTag("cartFetch");
}