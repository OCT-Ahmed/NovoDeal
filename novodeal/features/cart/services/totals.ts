import useCartStore from "@/store/cartStore";


export default function getTotals() {
    const { cart } = useCartStore();
    const cartItems = cart;
    const cartCount = cart.length;
    const subtotal = cartItems.reduce<number>((acc, item) => acc + item.price * item.quantity,
        0
    )
    const totalQuantity = cartItems.reduce<number>((acc, item) => acc + item.quantity,
        0
    );
    const tax = subtotal * 0.15;
    const delivery = subtotal > 200 ? 0 : 20
    const discount = 0;
    const total = subtotal + tax + delivery - discount;

    return {
        cartCount,
        totalQuantity,
        subtotal,
        tax,
        delivery,
        discount,
        total,
    }
}