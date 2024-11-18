
import Link from "next/link";
import styles from "./header.module.css";


export default function LoginHeader () {

    return (
        <>
            <header className={styles.header}>
                <Link className={styles.brand} href="/">
                    ShoeStyle
                </Link>
            </header>
        </>
    );
}
