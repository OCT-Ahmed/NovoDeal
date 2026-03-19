'use client';
import { useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";


const ProductCard = ({product}:any) => {
    const [isFav, setIsFav] = useState(false);
    const handleAddFav = () => {
        setIsFav(!isFav)
    }
    return (
        <article className="group relative flex flex-col items-start justify-start gap-2 w-52 min-h-[540px] rounded-lg overflow-hidden border border-novo-gray/50">
            {/* Image & FavIcon */}
            <div className="relative min-h-60 w-full overflow-hidden">
                <Image
                    className="bg-surface w-full h-60 object-cover hover:scale-107 transition-all duration-500"
                    src={product?.images[0]}
                    alt={product?.title}
                    width={200}
                    height={200}
                    priority
                />
                <Heart 
                className={`absolute z-50 top-2 right-2 bg-white/20 p-1 backdrop-blur-sm rounded-full cursor-pointer`}
                    size={30} 
                    color={isFav && "green"}
                    fill={isFav ? "green" : "lightgray" }
                    // opacity={isFav ? 1 : 0.1}
                    onClick={handleAddFav}
                />
            </div>
            <div className="flex flex-col gap-1 p-2">
                {/* title & description */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-lg text-primary">{product?.title}</h4>
                    <p className="text-novo-gray h-24 overflow-hidden">{product?.description}</p>
                </div>
                {/* ratings & rating times */}
                <div className="flex items-center justify-start gap-1 text-sm -mb-1">
                    <Star
                        size={14}
                        fill="yellow"
                    />
                    <p>{product?.rating}</p>
                    <p className="text-novo-gray">({product?.reviews?.length})</p>
                </div>
                {/* price & discount percentage */}
                <div className="flex items-center justify-start gap-1">
                    
                    <div className="flex items-center justify-center text-mono">
                        {/* <SaudiReal /> */}
                        <span className="font-semibold text-lg">
                        {(product?.price * (product?.discountPercentage / 100)).toFixed(2)} 
                        </span>
                    </div>
                    <span className="text-sm text-novo-gray line-through">{product?.price?.toFixed(2)}</span> 
                <span className="text-novo-green">%{product?.discountPercentage?.toFixed(2)}</span>
                </div>
                {/* free delivery & any features */}
                <button 
                    className="bg-accent py-2 w-full mt-2 rounded-full hover:bg-accent-hover cursor-pointer transition-colors duration-300"
                    
                    >
                    Add To Cart
                </button>
            </div>
        </article>
    )
}

export default ProductCard;