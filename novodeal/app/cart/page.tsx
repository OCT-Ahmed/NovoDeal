import CartItems from "@/features/cart/components/CartItemsList";
import OrderDetails from "@/features/payment/components/OrderDetails";

function CartPage() {
    return (
        <div 
            id="cart-page" 
            className="flex flex-col min-h-50 py-16 px-5 md:px-16"
        >
            <div className="font-heading font-bold pb-2 mb-8 border-b-1 border-novo-gray/50">
                My Cart
            </div>
            {/* Progress bar */}
            <div className="w-full bg-green-300 flex-1 mb-4"><p>Cart Shipping  Payment</p> </div>
            {/* steps preview */}
            <div className="flex items-start justify-center gap-4">


                {/* LEFT (CartProdcts & Forms) */}
                <CartItems />
                {/* Right (Details & Coupons) */}
                <div className="flex flex-col gap-4 w-2/5">
                    <div className="flex w-full bg-novo-white py-2 px-4 md:py-4 md:px-6 rounded-md shadow-md">
                        <div className="w-full bg-surface/20 backdrop-blur-md text-novo-gray font-bold px-2 py-1 border border-novo-gray/20 shadow-sm rounded-md outline-none ">
                            <label htmlFor="coupon" className="cursor-pointer">Apply Coupon</label>
                            <input
                                id="coupon"
                                name="coupon-input"
                                className="outline-none pl-4"
                                placeholder="HI750"
                            />
                        </div>
                        
                    </div>
                    <OrderDetails />
                </div>
            </div>
        </div>
        // {/* // 3 steps: cart > shipping > payment - completed state */}
    )
}
export default CartPage;