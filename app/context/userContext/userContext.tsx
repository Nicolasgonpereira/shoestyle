"use client";

import cartLoad from "@/app/lib/cartLoad";
import getTokenPayload from "@/app/lib/getTokenPayload";
import { createContext, useContext, useEffect, useState } from "react";

export type User = {
    id:string;
    role:string;
    name:string;
};

export interface ICartItem {
    id:number;
    cart_id:number;
    product_id:number;
    quantity:number;
    sku:string;
    images:string[];
    variant:{
        size:string;
        color:string
    },
    name:string;
    price:number;
    stock:{
        color:string;
        sizes:{
            size:number;
            stock:number
        }[];
    }[];
}

export interface ICartItems {
    items: ICartItem[];
    count:number;
};

interface UserContext {
    user: User | null;
    setUser: (user:User) => void;
    cart: ICartItems | null;
    setCart: (cart: ICartItems) => void;
    fetchCartItems: () => void;
}

const userContext = createContext<UserContext | undefined>(undefined);

export function UserProvider({children}: {children:React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [cart, setCart] = useState<ICartItems | null>(null);

    const fetchCartItems = async () => {
        setCart(await cartLoad(user?.id))
        console.log(cart)
    }
    useEffect(()=>{
        const fetchTokenPayload = async () => {
            const tokenPayload = await getTokenPayload();
            if (tokenPayload) {
                setUser(tokenPayload);
            };
        };
        fetchTokenPayload();
    },[]);

    useEffect(()=> {
        if(user) {
            fetchCartItems();
        }
    },[user]);

    return (
        <userContext.Provider value={{user, setUser, cart, setCart, fetchCartItems}}>
            {children}
        </userContext.Provider>
    );
};

export function useUserContext(): UserContext {
    const context = useContext(userContext);
    if (!context) throw new Error;
    return context;
};