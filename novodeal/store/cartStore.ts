import { create } from 'zustand';
import type { CartItem } from '@/types/product';
import { json } from 'stream/consumers';
// make a currency state later
interface CartStore {
    cart: CartItem[];
    addToCart: (addedItem:CartItem) => void;
    removeFromCart: (id: number) => void;
    decrementQuantity: (id: number) => void;
    taxPercentage: number;
    updateTaxPercentage: (t :number) => void;
    getTotal: () => {
            cartCount: number;
            subtotal: number;
            tax: number;
            delivery: number;
            discount: number;
            total: number;
         };
    hasHydrated: boolean,
    setHasHydrated: (value: boolean) => void;
}
const useCartStore = create<CartStore>((set, get) => ({
    cart: [],
    addToCart: (addedItem) => set((state) => {
        const isExisting = state.cart.find(item => item.id === addedItem.id);
        if (isExisting) {
            return {
                cart: state.cart.map(item => (
                    (item.id === addedItem.id) ?
                    {...item, quantity: item.quantity + 1}
                    : item
                ))
            };
        }

        return {
            cart: [...state.cart, {...addedItem, quantity: 1}]
        };
    }),
    removeFromCart: (id) => set(state => ({
        cart: state.cart.filter(item => item.id !== id),
    })),
    decrementQuantity: (id) => set((state) => ({
        cart: state.cart.map(item => (
            (item.id === id && item.quantity > 1) ? 
            {
                ...item,
                quantity: item.quantity - 1,
            } : item
        ))
    })),
    taxPercentage: 0.15,
    updateTaxPercentage: (t) => set({taxPercentage: t}),
    getTotal: () => {
        const items = get().cart;
        const cartCount = get().cart.length;
        const subtotal = items.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity,
            0
        )
        const tax = subtotal * 0.15;
        const delivery = subtotal > 200 ? 0 : 20
        const discount = 0;
        const total = subtotal + tax + delivery - discount;

        return {
            cartCount,
            subtotal,
            tax,
            delivery,
            discount,
            total,
        }
    },
    hasHydrated: false,
    setHasHydrated: (value) => set({hasHydrated: value}),
}))

export default useCartStore;

// Cart Logic without Variant:
/*
   1- use .find method to fing if the product has been already in the cart
   2- if the product is existing then we will update the quantity using map to find it and change it
   3- if not existitng we add the product to the cart with a quantity key and value of 1
   4- You can use .findIndex instead of .find and it works perfectly too and easy to update the cart
*/
// make the tax a readonly value so it can't be changed
// add a qurrency state and action.
// merge decrement and increment Quantity in a one Action (updateQuantity)