"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal/modal";
import styles from "./productGallery.module.css";
import ProductGalleryViewMore from "./productGalleryViewMore";

export default function ProductGallery({images}:{images:string[]}) {

    const [mainImage, setMainImage] = useState<string>(images[0]);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    function handleChangeProductImage(e: React.MouseEvent<HTMLButtonElement>) {
        if (e.currentTarget.dataset.src) {
            setMainImage(e.currentTarget.dataset.src);
        }
    }

    return (
        <div>
            <div>
                <Image src={mainImage} width={500} height={500}
                    alt={"Tênis Masculino"} style={{width:"100%", height:"100%", maxHeight:"600px", maxWidth:"600px", aspectRatio:"1/1"}} priority />
            </div>
            <div className={styles.wrapper}>
                {images.slice(0,5).map((src:string, index:number)=>{
                    return index===4 && images.length>=6 ? (
                        <button
                            key={src}
                            className={styles.button}
                            onClick={()=>setModalOpen(true)} >
                            <span style={{display:"inline-block",position:"relative", width:"100%", height:"100%"}}>
                                <Image src={src} width={100} height={100} alt={"Imagem do produto"}/>
                                <div className={styles.test}>+{images.length-4}</div>
                            </span>
                        </button>
                    ):(
                        <button
                            key={src}
                            className={`${styles.button} ${mainImage===src?styles.activeButton:""}`}
                            data-src={src}
                            onClick={(e)=>handleChangeProductImage(e)} >
                            <Image src={src} width={100} height={100}
                                alt={"Imagem do produto"} />
                        </button>
                    );
                })}
            </div>
            <Modal isOpen={isModalOpen} onClose={()=>setModalOpen(false)}>
                <ProductGalleryViewMore images={images} />
            </Modal>
        </div>
    );
}