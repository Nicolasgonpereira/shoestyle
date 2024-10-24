'use server'

import { revalidateTag } from "next/cache";

export default async function handleAddCart (product_id:string) {
    await fetch(`http://localhost:3000/api/cart?user_id=1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "user_id":1,
            "product_id":product_id,
            "variant":{
                "size":"40",
                "color":"Red",
            },
            "cart_id":"10",
        }),
    });
    revalidateTag('cartFetch');
}