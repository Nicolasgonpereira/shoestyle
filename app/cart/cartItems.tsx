
import Image from 'next/image';
import styles from './cart.module.css';
import { ICartItem } from './page';


export default async function CartItems({item}:{item:ICartItem}) {

    const colorStock = item.stock.find((entry) => entry.color === item.variant.color);
    const sizeStock = colorStock?.sizes.find((element) => element.size === Number(item.variant.size))

    let inStock = '';
    if (!colorStock || !sizeStock) {
        inStock = "Fora de estoque"
    } else {
        if (sizeStock.stock<=5) inStock = `${sizeStock.stock} unidades em estoque`;
        else inStock = 'Em estoque';
    }

    return(
        <div className={styles.itemRow}>
                        <div className={styles.itemDetails}>
                            <Image src={"/products/aerosport01.jpg"} width={100} height={100} alt=""/>
                            <div>
                                <span>{item.name}</span>
                                <span>Cor: {item.variant.color}</span>
                                <span>Tamanho: {item.variant.size}</span>
                                <span>SKU:SD54878SQD52</span>
                                <span>{inStock}</span>
                            </div>
                        </div>
                        <div className={styles.itemQuantifyInfo}>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className={styles.itemRowValue}>
                                <span>R$ {item.price}</span>
                                <span style={{color:'#999999'}}>unid</span>
                            </div>
                            <div className={styles.itemRowValue}>
                                <span>R$ {Number(item.price)*1}</span>
                                <span style={{color:'#999999'}}>subtotal</span>
                            </div>
                        </div>
                    </div>
    )
}