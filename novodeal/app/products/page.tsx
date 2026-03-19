import CategoriesNav from "@/components/product/categoriesNav";
import ProductsList from "@/components/product/ProductsList";
import { fetchProducts } from "@/lib/api/products/allProducts";
import { fetchCategories } from "@/lib/api/products/categories";


async function ProductsPage() {
    const products = await fetchProducts();
    const categories = await fetchCategories();
    return (
        <section 
            id="ProductsPage" 
            className="flex flex-col items-stretch justify-center gap-10 px-10 py-8"
        >
            <CategoriesNav categories={categories} />
            <ProductsList products={products} />
        </section>
    )
}

export default ProductsPage;