"use client";

import { useUserContext } from "@/app/context/userContext/userContext";
import Link from "next/link";
import { LuHeart, LuShoppingBag, LuUserCircle } from "react-icons/lu";
import styles from "./profile.module.css";

export default function Profile() {

    const {user, cart} = useUserContext();
    return (
        <div className={styles.profile}>
            <Link className={styles.item} href='/cart'>
                <LuShoppingBag className={styles.icon} />
                <p className={styles.itemName}>Carrinho</p>
                {Number(cart?.count) > 0 &&
                <span className={styles.cartCount}>
                    {cart?.items?.reduce((acc,cur)=>(acc+(cur.quantity)),0)}
                </span>}
            </Link>
            <div className={styles.item}>
                <LuHeart className={styles.icon} />
                <p className={styles.itemName}>Favoritos</p>
            </div>
            <Link className={styles.item} href='/login'>
                <LuUserCircle className={styles.icon} />
                <p className={styles.itemName}>{user?.name || "Entrar"}</p>
            </Link>
        </div>
    );
}