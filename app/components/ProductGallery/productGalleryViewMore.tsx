"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./productGalleryViewMore.module.css";

export default function ProductGalleryViewMore({images}:{images:string[]}) {

    const [mainImage, setMainImage] = useState<string>(images[4]);

    function handleChangeProductImage(data:string) {
        if (data) {
            setMainImage(data);
        }
    }

    return (
        <div style={{display:"flex",flexDirection:"row", gap:"16px", alignItems:"center", height:"100%"}}>
            <div style={{width:"auto", maxWidth:"600px",height:"auto", maxHeight:"80%", marginLeft:"12px"}}>
                <Image src={mainImage} width={400} height={400}
                    alt={"Tênis Masculino"} priority style={{ height:"auto", width:"auto", aspectRatio:"400/400", maxWidth:"400px", maxHeight:"400px"}}/>
            </div>
            <div className={styles.wrapper}>
                {images.map((src:string)=>(
                    <div
                        key={src}
                        className={`${styles.button} ${mainImage===src?styles.activeButton:""}`}
                        data-src={src}
                        onClick={()=>handleChangeProductImage(src)}
                    >
                        <Image src={src} width={100} height={100}
                            alt={"Imagem do produto"}/>
                    </div>
                ))}
            </div>
        </div>
    );
}