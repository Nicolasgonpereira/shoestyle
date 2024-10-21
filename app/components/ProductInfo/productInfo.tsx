'use client'

import { TproductInfo } from '@/app/[id]/[[...slug]]/page';
import Image from 'next/image';
import { LuHeart } from 'react-icons/lu';
import { TbTruckDelivery } from 'react-icons/tb';
import RenderStars from '../RenderStars/renderStars';
import styles from './productInfo.module.css';


export default function ProductInfo({review, product}:{review: number,product:TproductInfo}) {

    async function handleAddCart () {
        const add = await fetch(`/api/products/${product.id}`).then(res=>res.json());
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.brandAndSKU}>
                <span className={styles.brand}>
                    <Image src={'/brand/brand.jpg'} width={32} height={32} alt={`Logo da marca`} style={{margin:'0 10px 0 0'}} />
                    {product.brand_name}
                </span>
                <span className={styles.sku}>
                    SKU-KHDS9865214
                </span>
            </div>
            <h3>{product.name}</h3>
            <div className={styles.rating}>
                <span>
                    <RenderStars review={review} size={24}/>
                </span>
                <p>
                    32 reviews
                </p>
            </div>
            <div>
                <p style={{fontSize:'3rem', fontWeight:'700', margin:'16px 0'}}>R$ {product.price}</p>
            </div>
            <div className={styles.colors}>
                <div>
                    <span style={{margin:'0 8px 0 0'}}>Cor</span>
                    <span style={{margin:'0 8px 0 8px', color:'#a0a0a0'}}>*</span>
                    <span style={{margin:'0 0 0 8px', color:'#a0a0a0'}}>White</span>
                </div>
                <div style={{margin:'16px 0'}}>
                    <button style={{margin:'0 8px 0 0'}}></button>
                    <button style={{margin:'0 8px 0 8px'}}></button>
                    <button style={{margin:'0 0 0 8px'}}></button>
                </div>
            </div>
            <div className={styles.sizeWrapper}>
                <div>
                    <span style={{margin:'0 8px 0 0'}}>Tamanho</span>
                    <span style={{margin:'0 8px 0 8px', color:'#a0a0a0'}}>*</span>
                    <span style={{margin:'0 0 0 8px', color:'#a0a0a0'}}>BR</span>
                </div>
                <div className={styles.size}>
                    <button>33</button>
                    <button>34</button>
                    <button>35</button>
                    <button>36</button>
                    <button>37</button>
                    <button>38</button>
                    <button>39</button>
                    <button>40</button>
                    <button>41</button>
                    <button>42</button>
                    <button>43</button>
                    <button>44</button>
                    <button>45</button>
                    <button>46</button>
                    <button>47</button>
                    <button>48</button>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center', marginTop:'32px', gap:'12px'}}>
                <button className={styles.addCartButton} onClick={()=>handleAddCart()}>Adicionar ao carrinho</button>
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