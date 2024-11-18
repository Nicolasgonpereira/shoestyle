import { ICartItems } from "../context/userContext/userContext";

export default async function cartLoad(user_id:string | undefined) {
    const cartItems:ICartItems = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`,{
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
