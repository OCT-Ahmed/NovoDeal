'use client';
import { fetchCategories } from "@/lib/api/products/categories";
import { Categories } from "@/types/categories";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

const CategoriesNav = ({categories}:{categories:Categories}) => {
    // getting categories
    

    /* ========= VARIABLES ======== */
    /* -------- Navidation & Params ------- */
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get("cat");

    /* =========== Filters & Maps =========== */
    const filteredCategories = categories.filter((cat) => !cat.slug.includes("mens") && !cat.slug.includes("womens"));

    /* =========== HANDLERS =========== */
    const handleCategoryClick = (cat:string):void => {
        const param = new URLSearchParams(searchParams);
        param.set("cat", cat)
        router.push(`${pathname}?${param}`)
    }
    return (
        <ul
            id="categories" 
            className="relative hidden md:flex flex-reverse items-center justify-center gap-2 py-[0.5] md:gap-4 lg:gap-6 px-2 md:px-4 md:py-2 lg:px-6 w-full border border-novo-gray/50 rounded-lg overflow-x-scroll"
        >
            <li
                        id="all-products"
                        className={`
                           cursor-pointer transition-all duratuon-300 

                            ${
                            selectedCategory === "all" 
                            ? "bg-surface/20 backdrop-blur-md text-accent-hover px-2 py-1 border border-novo-gray/20 shadow-lg rounded-md" 
                            : "text-novo-dark-gray hover:text-accent-hover"
                            }
                        `}
                        key={"all"}
                        onClick={() => handleCategoryClick("All")}    
                    >
                        All
                    </li>
            <li
                id="men-clothes"
                className="cursor-pointer"
                key="men-clothes"
                onClick={() => handleCategoryClick("men-clothes")}    
            >
                Men clothes
            </li>
            <li
                id="women-clothes"
                className="cursor-pointer"
                key="women-clothes"
                onClick={() => handleCategoryClick("women-clothes")}    
            >
                Women clothes
            </li>
            {
                filteredCategories.map(cat => (
                    <li
                        id={cat.slug}
                        className={`cursor-pointer ${selectedCategory === cat.slug ?
                            "bg-surface/20 backdrop-blur-md text-accent-hover px-2 py-1 border border-novo-gray/20 shadow-lg rounded-md" 
                            : "text-novo-dark-gray"}`}
                        key={cat.slug}
                        onClick={() => handleCategoryClick(cat.slug)}    
                    >
                        {cat.name}
                    </li>
                ))
            }
        </ul>
    )
}

export default CategoriesNav;