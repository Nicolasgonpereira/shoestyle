"use client";

import { useUserContext } from "@/app/context/userContext/userContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slugify } from "../../lib/slugify";
import styles from "./cart.module.css";
import modifyItemCart from "./modifyItemCart";
import { ICartItem } from "./page";


export default function CartItems({item}:{item:ICartItem}) {

    const {user, setCart} = useUserContext();
    const [loadingHandleQuantifyModify, setLoadingHandleQuantifyModify] = useState<boolean>(false);
    const colorStock = item.stock.find((entry) => entry.color === item.variant.color);
    const sizeStock = colorStock?.sizes.find((element) => element.size === Number(item.variant.size));

    let inStock = "";
    if (!colorStock || !sizeStock) {
        inStock = "Fora de estoque";
    } else {
        if (sizeStock.stock<=5) inStock = `${sizeStock.stock} unidades em estoque`;
        else inStock = "Em estoque";
    }

    const handleIncrement = async () => {
        if (!loadingHandleQuantifyModify) {
            setLoadingHandleQuantifyModify(true);
            const cart = await modifyItemCart(user?.id,item.cart_id,item.id,item.quantity+1);
            setCart(cart);
            setLoadingHandleQuantifyModify(false);
        }
    };

    const handleDecrement = async () => {
        if (!loadingHandleQuantifyModify) {
            setLoadingHandleQuantifyModify(true);
            const cart = await modifyItemCart(user?.id,item.cart_id,item.id,item.quantity-1);
            setCart(cart);
            setLoadingHandleQuantifyModify(false);
        }
    };

    return(
        <div className={styles.itemRow}>
            <div className={styles.itemDetails}>
                <Link href={`../${item.product_id}/${slugify(item.name)}`}>
                    <Image src={item.images[0]} width={100} height={100} alt=""/>
                </Link>
                <div>
                    <Link href={`../${item.product_id}/${slugify(item.name)}`}>{item.name}</Link>
                    <span>Cor: {item.variant.color}</span>
                    <span>Tamanho: {item.variant.size}</span>
                    <span>SKU:{item.sku}</span>
                    <span>{inStock}</span>
                </div>
            </div>
            <div className={styles.itemQuantifyAndValue}>
                <div className={styles.itemQuantityValue}>
                    <button onClick={handleDecrement}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                </div>
                <div className={styles.itemRowValue}>
                    <span>R$ {item.price}</span>
                    <span style={{color:"#999999"}}>unid</span>
                </div>
                <div className={styles.itemRowValue}>
                    <span>R$ {Number(item.price)*1}</span>
                    <span style={{color:"#999999"}}>subtotal</span>
                </div>
            </div>
        </div>
    );
}