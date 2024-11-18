import ProductService from "@/app/lib/productService";
import { NextRequest, NextResponse } from "next/server";

const service = new ProductService;

export async function GET(request: NextRequest,{params}:{params:{id:string}}) {

    try {
        const {id} = params;
        const res = await service.getProduct(id);

        if (!res) {
            return NextResponse.json({message:"Produto não encontrado"}, {status:404});
        }
    
        return NextResponse.json(res, {status:200});
    } catch {
        return NextResponse.json({message: "Erro ao buscar produto"}, {status:500});
    }
}