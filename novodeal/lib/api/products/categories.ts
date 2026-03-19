import { Categories } from "@/types/categories";

export const fetchCategories = async ():Promise<Categories> => {
    try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) {
            throw new Error("Can't fetch categories")
        }
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error:", error);
        throw error; // why tyhis prevent errors in my current code in types
    }
}