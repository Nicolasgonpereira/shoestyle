

import styles from './cart.module.css';
import CartItems from './cartItems';

export interface ICartItem {
    id:number;
    cart_id:number;
    product_id:number;
    quantity:number;
    variant:{
        size:string;
        color:string
    },
    name:string;
    price:string;
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



export default async function Page() {

    const cartItems:ICartItems = await fetch(`http://localhost:3000/api/cart?user_id=1`,{method:'GET'}).then(res=>res.json());

    return (
        <main className={styles.mainWrapper}>
            <h2>
                Carrinho
            </h2>
            <div className={styles.cartWrapper}>
                <div className={styles.shopping}>
                    <h4>Pedidos</h4>
                    {cartItems.items.map(itemCart=>(
                        <CartItems key={`Item ${itemCart.id}`} item={itemCart} />
                    ))}
                </div>
                <div className={styles.summary}>
                    <h4>Resumo da compra(2)</h4>
                    <div>
                        <span>Produtos</span>
                        <span>R$ 199,90</span>
                    </div>
                    <div>
                        <span>Frete</span>
                        <span>R$ 29,90</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>R$ {(199.90+29.90).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </main>
    )
}