
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <section className={styles.brand}>
                ShoeStyle
            </section>
            <section>
                <h3>
                    Institucional
                </h3>
                <Link href='/institucional/sobre-a-shoestyle'>Sobre a ShoeStyle</Link>
                <Link href='/institucional/termo-de-uso'>Termo de Uso</Link>
            </section>
            <section>
                <h3>
                    Produtos
                </h3>
                <a>Mulheres</a>
                <a>Homens</a>
                <a>Kids</a>
            </section>
            <section>
                <h3>
                    Contatos
                </h3>
                <a className={styles.contactLink} href='https://github.com/Nicolasgonpereira' target='_blank' >
                    <span style={{display:"flex", alignItems:"center"}}><IoLogoGithub style={{width:"24px",height:"24px"}}/></span>
                    <span>/Nicolasgonpereira</span>
                </a>
                <a className={styles.contactLink} href='https://www.linkedin.com/in/nicolasgoncalvespereira/' target='_blank' >
                    <span style={{display:"flex", alignItems:"center"}}><IoLogoLinkedin style={{width:"24px",height:"24px"}}/></span>
                    <span>/nicolasgoncalvespereira</span>
                </a>
            </section>
        </footer>
    );
}