"use client"
import useCartStore from "@/store/cartStore"
import CartItemCard from "./CartItemCard";

const CartItems = () => {
    const { cart } = useCartStore();
    console.log()
    return (
        <div className="w-2/3">
            <ul 
                id="products-list" 
                className="flex flex-col gap-2 w-full bg-novo-white py-2 px-4 md:py-4 md:px-6 rounded-md shadow-md"
            >
                {
                    cart.map(item => (
                        <li key={item?.id}>
                            <CartItemCard item={item} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CartItems;