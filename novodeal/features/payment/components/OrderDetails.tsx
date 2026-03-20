const OrderDetails = () => {
    return (
        <article className="flex flex-col gap-2 w-full bg-novo-white py-2 px-4 md:py-4 md:px-6 rounded-md shadow-md">
            <h2 className="font-semibold novo-underline">Your Order</h2>
            {/* Subtotal */}
            <div className="flex items-center justify-between novo-underline">
                <p className="text-novo-gray">Subtotal (2 items)</p>
                <p className="font-mono font-bold text-sm ">$53.89</p>
            </div>
            {/* Delivery */}
            <div className="flex-col items-start justify-between novo-underline">
                <div className="flex items-center justify-between">
                    <p className="text-novo-gray">Delivery</p>
                    <p className="font-mono font-bold text-sm ">$53.89</p>
                </div>
                {/* Map Location */} 
            </div>
            {/* Tip */}
            <div className="flex-col items-start justify-center gap-8 novo-underline">
                <div className="flex items-center justify-between">
                    <p className="text-novo-gray">Tip</p>
                </div>
                <ul className="flex items-center justify-between gap-2 text-sm">
                    <li className="bg-surface/20 backdrop-blur-md text-novo-gray font-bold px-2 py-1 border border-novo-gray/20 shadow-sm rounded-md outline-none cursor-pointer">%10</li>
                    <li className="bg-surface/20 backdrop-blur-md text-novo-gray font-bold px-2 py-1 border border-novo-gray/20 shadow-sm rounded-md outline-none cursor-pointer">%$15</li>
                    <li className="bg-surface/20 backdrop-blur-md text-novo-gray font-bold px-2 py-1 border border-novo-gray/20 shadow-sm rounded-md outline-none cursor-pointer">%25</li>
                     <li className="bg-surface/20 backdrop-blur-md text-novo-gray font-bold px-2 py-1 border border-novo-gray/20 shadow-sm rounded-md hover:text-accent-hover outline-none cursor-pointer">%50</li>
                    <li className="flex items-stretch justify-center gap-1 text-novo-gray bg-surface/20 backdrop-blur-md text-novo-gray font-bold overflow-hidden border border-novo-gray/20 shadow-sm rounded-md">
                        <label htmlFor="tip-payment" className=" text-novo-gray font-bold px-2 pr-8 py-1 border border-novo-gray/20 rounded-md rounded-tr-none rounded-br-full cursor-pointer">
                            Custom
                        </label>
                        <input
                            id="tip-payment"
                            className="px-2 w-26 outline-none appearance-none"
                            type="text"
                            inputMode="numeric"
                            placeholder="$1"
                            min="1"
                            max="100"
                        />
                    </li>
                </ul>
                {/* Map Location */} 
            </div>
            {/* Tax */}
            {/* Discount */}
            {/* Total to pay */}
            {/* Place Order Button */}
        </article>
    )
}

export default OrderDetails;