import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import useCartStore from "../../../store/cartStore"
import { useEffect } from "react";

const CartButton = () => {
    const { hasHydrated, setHasHydrated } = useCartStore();
    const cartCount = useCartStore((state) => state.cart.length);

    useEffect(() => {
        setHasHydrated(true);
    }, [])
    return (
        <Link 
            href="/cart" 
            className="
            relative hover:opacity-50 transition-all duration-300
        ">
            <ShoppingCart size={20} className="" />
            {
                (hasHydrated && cartCount > 0) &&
                <div className="absolute -top-2 -right-2 flex items-center justify-center font-semibold bg-accent-hover text-white w-3 h-3 rounded-full p-2">
                
                     <span className="text-xs">
                    {cartCount}
                    </span>    
                </div>
            }
        </Link>
    )
}
 
export default CartButton;