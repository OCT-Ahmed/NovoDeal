"use client"
import Image from "next/image";
import useCartStore from "@/store/cartStore";
import { CartItem } from "@/types/product";

import { Plus, Minus, Trash } from "lucide-react";

const CartItemCard = ({item}: {item: CartItem}) => {
    const { addToCart, decrementQuantity, removeFromCart } = useCartStore();

    return (
        <article className="flex items-center justify-between w-full ">
            {/* Left (Image & Details) */}
            <div className="flex items-center justify-between gap-8 text-novo-gray">
                {/* Image */}
                <div className="relative w-32 h-32 overflow-hidden bg-gray-50">
                    <Image
                        className="object-contain w-6 h-6"
                        src={item?.images[0]}
                        alt={item?.title}
                        fill
                    />  
                </div>
                {/* Details */}
                <div className="flex flex-col justify-between text-md">
                    <div className="flex flex-col gap-1">
                        <p className="text-base text-md font-semibold">{item?.title}</p>
                        <p className="text-sm">Quantity: {item?.quantity}</p>
                    </div>
                    <p className="font-medium">{item?.price.toFixed(2)}</p>
                </div>
            </div>
                
            {/* CRUD Buttons */}
            <div className="flex items-stretch justify-center h-8">
                <button className="flex items-center justify-center bg-surface/20 backdrop-blur-md text-novo-gray p-1 px-2 border border-novo-gray/20 shadow-sm rounded-md hover:bg-accent-hover/50 outline-none cursor-pointer"
                onClick={() => addToCart(item)}
            >
                    <Plus size={16} />
                </button>
                
                <span className="flex items-center justify-center py-2 px-4">
                    {item.quantity}
                </span>
                
                {
                    item?.quantity === 1 ? 
                    <button 
                        className="flex items-center justify-center bg-surface/20 backdrop-blur-md text-red-700 p-1 px-2 border border-novo-gray/20 shadow-sm rounded-md bg-red-100  hover:bg-red-200 outline-none cursor-pointer"
                        onClick={() => removeFromCart(item?.id)}
                    >
                        <Trash size={16} />
                    </button>
                    :
                    <button 
                        className="flex items-center justify-center bg-surface/20 backdrop-blur-md text-novo-gray p-1 px-2 border border-novo-gray/20 shadow-sm rounded-md hover:bg-accent-hover/50 outline-none cursor-pointer"
                        onClick={() => decrementQuantity(item?.id)}
                    >
                        <Minus size={16} />
                    </button>
                }   
            </div>
        </article>
    )
}

export default CartItemCard;