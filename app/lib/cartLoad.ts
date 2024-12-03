import { ICartItems } from "../context/userContext/userContext";
import { app_root } from "./root";

export default async function cartLoad(user_id:string | undefined) {
    const cartItems:ICartItems = await fetch(`${app_root}/api/cart?user_id=${user_id}`,{
        method:"GET",
        // headers: {
        //     "Content-Type": "application/json",
        //     "Cookie":`${await cookies()}`,
        // },
        // credentials: "include",
        next: { tags: ["cartFetch"]}
    }).then(res=>res.json());
    return cartItems;
}
