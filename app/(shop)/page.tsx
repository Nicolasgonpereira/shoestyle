
import Image from "next/image";
import Benefits from "../components/Benefits/benefits";
import Carousel from "../components/Carousel/carousel";
import { app_root } from "../lib/root";
import styles from "./page.module.css";

export default async function Home() {

    const productsList = await fetch(`${app_root}/api/products`, {method:"GET"}).then(res=>res.json());

    return (
        <main style={{display:"flex", flexDirection:"column", width:"100%"}}>
            <Image className={styles.banner} src="/banner.jpg" alt ='Oferta ShoeStyle' width={1920} height={450} priority />
            <div className={styles.destaquesWrapper}>
                <Benefits />
                <Carousel products={productsList}/>
            </div>
        </main>
    );
}
