import { BsCreditCard } from "react-icons/bs";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import styles from "./benefits.module.css";

export default function Benefits() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <TbTruckDelivery className={styles.icon} />
                <p>
                    Frete grátis nas compras acima de R$ 129,90
                </p>
            </div>
            <div className={styles.card}>
                <BsCreditCard className={styles.icon} />
                <p>
                    Parcelamento em até 10x sem juros
                </p>
            </div>
            <div className={styles.card}>
                <RiDiscountPercentLine className={styles.icon} />
                <p>
                    10% de desconto à vista
                </p>
            </div>
            <div></div>
        </div>
    );
}