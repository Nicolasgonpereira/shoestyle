'use client';

import { useUserContext } from "@/app/context/userContext/userContext";
import styles from "./cart.module.css";
import CartItems from "./cartItems";

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

interface ICartItems {
    items: ICartItem[];
    count:number;
}

export default function Page() {

    const {cart} = useUserContext();

    const cartProductPrice:number = cart?.items?.reduce((acc,cur)=>acc+cur.price*cur.quantity,0) || 0;
    const deliveryFee:number = Number(cart?.count) <= 0 || cartProductPrice >= 129.90 ? 0 : 29.90;

    return (
        <main className={styles.mainWrapper}>
            <h2>
                Carrinho
            </h2>
            <div className={styles.cartWrapper}>
                <div className={styles.shopping}>
                    <h4>Pedidos</h4>
                    {cart?.items?.map(itemCart=>(
                        <CartItems key={`Item ${itemCart.id}`} item={itemCart} />
                    ))}
                </div>
                <div className={styles.summary}>
                    <h4>Resumo da compra({cart?.items?.reduce((acc,cur)=>(acc+(cur.quantity)),0)})</h4>
                    <div>
                        <span>Produtos</span>
                        <span>R$ {cartProductPrice?.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Frete</span>
                        <span>{Number(cart?.count)<=0?"R$ 0.00":deliveryFee==0?"Grátis":`R$ ${deliveryFee.toFixed(2)}`}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>R$ {(cartProductPrice+deliveryFee).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
