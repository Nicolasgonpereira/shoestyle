
import Link from "next/link";
import Brand from "../Brand/brand";
import Profile from "../Profile/profile";
import styles from "./header.module.css";
import Search from "./search";


export default function Header () {

    return (
        <>
            <header className={styles.header}>
                <Link className={styles.brand} href="/">
                    <Brand />
                </Link>
                <Search />
                <Profile />
            </header>
        </>
    );
}
