import ProductService from "@/app/lib/productService";
import { NextRequest, NextResponse } from "next/server";

const service = new ProductService;

export async function POST(request: NextRequest) {

    const {user_id, product_id, variant, cart_id} = await request.json();

    try {
        
        if (!user_id || !product_id || !variant || !cart_id) throw new Error;

        const result = await service.addToCart(user_id,product_id, variant, cart_id);
        return NextResponse.json({status:200})
    } catch {
        return NextResponse.json({message:'Erro ao adicionar o produto no carrinho'}, {status:500});
    }
}

export async function GET(request: NextRequest) {

    const {searchParams} = new URL(request.url);
    const user_id = searchParams.get('user_id');

    try {
        const result = await service.getCart(Number(user_id));
        return NextResponse.json(result, {status:200});
    } catch {
        return NextResponse.json({message:'Erro ao buscar o carrinho'}, {status:500})
    }
}

export async function PUT(request: NextRequest) {

    const {user_id, cart_id, idProductOnCart, quantity} = await request.json();

    try {
        await service.incrementCartItem(user_id, cart_id, idProductOnCart, quantity);
        return NextResponse.json({status:200});
    } catch {
        return NextResponse.json({message:'Erro ao atualizar o produto no carrinho'}, {status:500});
    }
}