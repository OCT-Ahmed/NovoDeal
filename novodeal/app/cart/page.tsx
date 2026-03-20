import OrderDetails from "@/features/payment/components/OrderDetails";

function CartPage() {
    return (
        <div 
            id="cart-page" 
            className="flex flex-col border border-gray-300 min-h-50 py-16 px-5 md:px-16 lg:px-20"
        >
            <div className="font-heading font-bold pb-2 mb-8 border-b-1 border-novo-gray/50">
                My Cart
            </div>
            {/* Progress bar */}
            <div className="w-full bg-green-300 flex-1 mb-4"><p>Cart Shipping  Payment</p> </div>
            {/* steps preview */}
            <div className="flex items-start justify-center gap-8">
                {/* LEFT (CartProdcts & Forms) */}
                <div className="bg-green-500 w-3/5">Products</div>
                {/* Right (Details & Coupons) */}
                <div className="flex flex-col gap-4 w-2/5">
                    <div className="bg-surface">Coupons</div>
                    <OrderDetails />
                </div>
            </div>
        </div>
        // {/* // 3 steps: cart > shipping > payment - completed state */}
    )
}
export default CartPage;