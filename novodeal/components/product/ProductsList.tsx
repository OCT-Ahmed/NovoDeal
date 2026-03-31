import Link from "next/link";
import ProductCard from "./ProductCard";
import { Product, Products } from "@/types/product";

const ProductsList = ({products}:{products:Products}) => {
    
    return (
        <ul 
            id="products-list" 
            className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-6 lg:gap-6 bg-main w-full"
        >
            {
            products.map((product:Product) => (
                // <Link href={`${product.title}`}>
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li> 
                // </Link>
                    
            ))  
            }    
        </ul>
    )
}

export default ProductsList;