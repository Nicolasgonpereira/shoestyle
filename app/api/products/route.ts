"use server";

import ProductService from "@/app/lib/productService";
import { NextResponse } from "next/server";

const service = new ProductService;

export async function GET() {

    const resp = await service.getAllProduct();
    return NextResponse.json(resp, {status:200});
}


