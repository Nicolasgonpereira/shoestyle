
import Repository from "./db";

export default class ProductService {
    private repository:Repository

    constructor (newRepository=new Repository()) {
        this.repository = newRepository
    };

    getProduct = async (id:string) => {
        const result = await this.repository.getProduct(id);
        return result;
    };

    getAllProduct = async () => {
        const result = await this.repository.getAllProducts();
        return result;
    };

    getCart = async (user_id:number) => {
        const result = await this.repository.getCart(user_id);
        return {items:result.rows,count:result.rowCount};
    }

    verifyUserCart = async (user_id:number, cart_id:number) => {
        const result = await this.repository.getUserByCart(cart_id);
        const verify = result.user_id === user_id;
        return verify;
    }

    addToCart = async (user_id:number,product_id:any, variant:any, oldCart_id:number) => {

        let cart_id;
        
        if (oldCart_id == null) {
            const result = await this.repository.createNewCart(user_id);//CREATE NEW CART
            cart_id = result.id;
        } else {
            if (await this.verifyUserCart(user_id,oldCart_id)) {
                cart_id = oldCart_id;
            } else {
                throw new Error;
            };
        };
        
        const result = await this.repository.addToCart(product_id,variant,cart_id);
        return result;
    };
}