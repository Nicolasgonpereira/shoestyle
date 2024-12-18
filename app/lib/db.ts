
import { sql } from "@vercel/postgres";


export default class Repository {
    
    getAllProducts = async () => {
        const result = await sql`
            SELECT * FROM products;
        `;
        return result.rows;
    };

    getProduct = async (id:string) => {
        const result = await sql`
            SELECT p.*, b.name AS brand_name
            FROM products  p
            INNER JOIN brands b ON p.brand_id = b.id
            WHERE p.id = ${id}; 
        `;
        return result.rows[0];
    };

    // CART REPOSITORY

    getCart = async (user_id:string|null) => {
        return await sql`
            SELECT ci.*,p.name,p.price,p.images,p.variant AS stock
            FROM cart_items ci
            JOIN cart c ON ci.cart_id = c.id
            JOIN products p ON ci.product_id = p.id
            WHERE c.user_id = ${user_id}
            ORDER BY ci.id ASC;
        `;
    };

    createNewCart = async (user_id:number) => {
        const result = await sql`
            INSERT INTO cart (user_id)
            VALUES (
                ${user_id}
            )
            RETURNING *;
        `;
        return result.rows[0];
    };

    getUserByCart = async (cart_id:number) => {
        const result = await sql`
            SELECT *
            FROM cart
            WHERE id = ${cart_id};
        `;
        return result.rows[0];
    };

    addToCart = async (product_id:any, variant:any, cart_id:string) => {
        const result = await sql`
            INSERT INTO cart_items (cart_id, product_id, quantity, variant)
            VALUES (
                ${cart_id},
                ${product_id},
                ${1},
                ${variant}::jsonb
            )
            RETURNING *;
        `;
        return result.rows[0];
    };

    ModifyQuantityItemOnCart = async (cart_id:number, idProductOnCart:number, quantity:number) => {
        await sql`
            UPDATE cart_items
            SET quantity = ${quantity}
            WHERE id = ${idProductOnCart} AND cart_id = ${cart_id}
        `;
        return await sql`
        SELECT ci.*,p.name,p.price,p.images,p.variant AS stock
        FROM cart_items ci
        JOIN cart c ON ci.cart_id = c.id
        JOIN products p ON ci.product_id = p.id
        WHERE c.id = ${cart_id}
        ORDER BY ci.id ASC;
    `;
    };

    DeleteItemOnCart = async (cart_id:number, idProductOnCart:number) => {
        await sql`
            DELETE from cart_items
            WHERE id = ${idProductOnCart} AND cart_id = ${cart_id}
        `;
        return await sql`
        SELECT ci.*,p.name,p.price,p.images,p.variant AS stock
        FROM cart_items ci
        JOIN cart c ON ci.cart_id = c.id
        JOIN products p ON ci.product_id = p.id
        WHERE c.id = ${cart_id}
        ORDER BY ci.id ASC;
    `;
    };

    getUserInfo = async (email:string, password_hash:string) => {
        return await sql`
            SELECT *
            FROM users
            WHERE email = ${email} AND password_hash = ${password_hash}
        `;
    };
}