
import Link from "next/link";
import { LuHeart, LuShoppingBag, LuUserCircle } from "react-icons/lu";
import styles from './profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profile}>
            <Link className={styles.item} href='/cart'>
                <LuShoppingBag className={styles.icon} />
                <p className={styles.itemName}>Carrinho</p>
            </Link>
            <div className={styles.item}>
                <LuHeart className={styles.icon} />
                <p className={styles.itemName}>Favoritos</p>
            </div>
            <LuUserCircle className={`${styles.icon} ${styles.user}`} />
        </div>
    )
}