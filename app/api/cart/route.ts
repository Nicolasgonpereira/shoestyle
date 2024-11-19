import ProductService from "@/app/lib/productService";
import { withSession } from "@/app/middleware/sessionValidator";
import { NextRequest, NextResponse } from "next/server";

const service = new ProductService;

export async function POST(request: NextRequest) {

    const {user_id, product_id, variant, cart_id} = await request.json();

    try {
        
        if (!user_id || !product_id || !variant || !cart_id) throw new Error;

        await service.addToCart(user_id,product_id, variant, cart_id);
        return NextResponse.json({status:200});
    } catch {
        return NextResponse.json({message:"Erro ao adicionar o produto no carrinho"}, {status:500});
    }
}

export const GET = withSession(async (request: NextRequest)  => {
    try {
        const {searchParams} = new URL(request.url);
        const user_id = searchParams.get("user_id");
        const userIdVerify = (request as any).user.id;
        if (userIdVerify != user_id) throw new Error;
        const result = await service.getCart(user_id);
        return NextResponse.json(result, {status:200});
    } catch {
        return NextResponse.json({message:"Erro ao buscar o carrinho"}, {status:500});
    }
});

export async function PUT(request: NextRequest) {

    const {user_id, cart_id, idProductOnCart, quantity} = await request.json();

    try {
        const result = await service.incrementCartItem(user_id, cart_id, idProductOnCart, quantity);
        return NextResponse.json(result, {status:200});
    } catch {
        return NextResponse.json({message:"Erro ao atualizar o produto no carrinho"}, {status:500});
    }
}