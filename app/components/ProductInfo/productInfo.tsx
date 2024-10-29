'use client'

import { TproductInfo } from '@/app/[id]/[[...slug]]/page';
import { useState } from 'react';
import { LuHeart } from 'react-icons/lu';
import { TbTruckDelivery } from 'react-icons/tb';
import RenderStars from '../RenderStars/renderStars';
import addItemToCart from './addToCart';
import styles from './productInfo.module.css';


export default function ProductInfo({product}:{product:TproductInfo}) {

    const [selectedColor, setSelectedColor] = useState<string>(product.variant[0].color);
    const [selectedSize, setSelectedSize] = useState<string>();
    const [isSizeMissing, setIsSizeMissing] = useState<boolean>(false);
    console.log('renderizou')
    const allowedSizes = (): string[] | undefined => {
        const variant = product.variant.find(variant => variant.color === selectedColor);
        return variant ? variant.sizes.map(e=>e.size).sort() : undefined;
    };
    function handleAddCart (product_id:string,selectedColor:string,selectedSize:string | undefined) {
        if (!selectedSize) {
            setIsSizeMissing(true);
        } else {
            setIsSizeMissing(false);
            addItemToCart(product_id,selectedColor,selectedSize);
        }
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.brandAndSKU}>
                <span className={styles.brand}>
                    {/* <Image src={'/brand/brand.jpg'} width={32} height={32} alt={`Logo da marca`} style={{margin:'0 10px 0 0'}} /> */}
                    {product.brand_name}
                </span>
                <span className={styles.sku}>
                    SKU-{product.sku}
                </span>
            </div>
            <h3>{product.name}</h3>
            <div className={styles.rating}>
                <span>
                    <RenderStars review={Number(product.rating)} size={24}/>
                </span>
                <p>
                    {product.reviewquantity==0?"O produto ainda não possui avaliações":
                        `baseado em {product.reviewquantity} {product.reviewquantity==1?"avaliação":"avaliações"}`}
                </p>
            </div>
            <div>
                <p style={{fontSize:'3rem', fontWeight:'700', margin:'16px 0'}}>R$ {product.price}</p>
            </div>
            <div >
                <div>
                    <span style={{margin:'0 8px 0 0'}}>Cor</span>
                    <span style={{margin:'0 8px 0 8px', color:'#a0a0a0'}}>*</span>
                    <span style={{margin:'0 0 0 8px', color:'#a0a0a0'}}>{selectedColor}</span>
                </div>
                <div className={styles.colors}>
                    {product.variant.map(variant=>(
                        <button className={variant.color===selectedColor?styles.buttonActive:''} key={variant.color} onClick={()=>{setSelectedColor(variant.color);setSelectedSize(undefined)}} >
                            {variant.color}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.sizeWrapper}>
                <div style={{display:'flex', flexDirection:'row',gap:'8px'}}>
                    <span>Tamanho</span>
                    <span style={{color:'#a0a0a0'}}>*</span>
                    <span style={{color:'#a0a0a0'}}>BR</span>
                    {isSizeMissing && <span className={styles.isSizeMissing}>Selecione o tamanho</span>}
                </div>
                <div className={styles.size}>
                    {allowedSizes()?.map((element)=>(
                        <button className={element===selectedSize?`${styles.buttonActive}`:''} key={`sizeTable ${element}`} onClick={()=>setSelectedSize(element)} >{element}</button>
                    ))}
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center', marginTop:'32px', gap:'12px'}}>
                <button className={styles.addCartButton} onClick={()=>handleAddCart(product.id,selectedColor,selectedSize)}>Adicionar ao carrinho</button>
                <button className={styles.addFavoriteButton}><LuHeart style={{width:'24px',height:'24px'}}/></button>
            </div>
            <div style={{display:'flex', alignItems:'center', width:'100%', gap:'8px', marginTop:'12px'}}>
                <TbTruckDelivery style={{width:'24px', height:'24px'}}/> 
                <span style={{fontSize:'0.8rem', fontWeight:'600'}}>
                    Entrega grátis nas compras acima de R$ 129,90
                </span>
            </div>
        </div>
    )
}