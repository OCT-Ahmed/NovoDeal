import { ProductResponse } from "@/types/product";

export const fetchProducts = async ():Promise<ProductResponse> => {
    try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) {
            throw new Error("Can't fetch products");
        } 

        const data = await res.json();
        return data.products;
    } 
    catch (error) {
        console.error("Error:", error);
        throw error;
    }
};