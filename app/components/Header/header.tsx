
import Link from 'next/link';
import Profile from '../Profile/profile';
import styles from './header.module.css';
import Search from './search';


export default function Header () {

    return (
        <>
            <header className={styles.header}>
                <Link className={styles.brand} href="/">
                    ShoeStyle
                </Link>
                <Search />
                <Profile />
            </header>
        </>
    )
}
