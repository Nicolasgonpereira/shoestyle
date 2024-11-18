
import ProductGallery from "@/app/components/ProductGallery/productGallery";
import ProductInfo from "@/app/components/ProductInfo/productInfo";
import { slugify } from "@/app/lib/slugify";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;

export type TproductInfo = {
    id:string;
    name:string;
    description:string;
    price:string;
    sku:string;
    reviewquantity:number;
    images:string[];
    variant:{
        color:string;
        sizes:{
            size:string;
            stock:number;
        }[];
    }[];
    category_id:number;
    brand_id:number;
    brand_name:string;
    rating:string;
};

export default async function Page({
    params,
}: {
    params: { id: string, slug?: string[] }
}) {
    const productInfo:TproductInfo = await fetch(`http://localhost:3000/api/products/${params.id}`,{method:"GET"}).then(res=>res.json());

    if (!productInfo.id) {
        return (
            <main style={{display:"flex", flexDirection:"column", width:"100%", boxSizing:"border-box", padding:"0 48px", alignItems:"center"}}>
                <h1>Produto não encontrado</h1>
                <p>O produto que você está procurando não está disponível</p>
                <Link href='/' style={{marginBottom:"48px", textDecoration:"none", color:"#99C3FF"}}>Voltar para a Home</Link>
            </main>
        );
    }

    const correctSlug = slugify(productInfo.name);
        
    if (params.slug?.[0] !== correctSlug) {
        permanentRedirect(`/${params.id}/${correctSlug}`);
    };

    return (
        <main style={{display:"flex", flexDirection:"column", width:"100%", boxSizing:"border-box", padding:"0 48px"}}>
            <div style={{width:"100%",display:"grid", gridTemplateColumns:"3fr 2fr", margin:"0 0 16px 0", gap:"30px"}}>
                <ProductGallery images={productInfo.images} />
                <ProductInfo product={productInfo} />
            </div>
            <div style={{width:"60%",display:"flex", margin:"16px"}}>
                <div>
                    <h3>
                            Descrição
                    </h3>
                    <p>
                        {productInfo.description}
                    </p>
                </div>
            </div>
        </main>
    );
}


// export async function generateStaticParams() {

//     const products = [
//         {
//         id:'1',
//         slug:'tenis-42br'},
//         {
//         id:'5',
//         slug:'tenis-45br'}
//     ];

//     return products.map((product)=>({
//         id: product.id,
//         slug: [product.slug]
//     }));
// }
