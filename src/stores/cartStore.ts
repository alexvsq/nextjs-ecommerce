import { CartProductType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItems {
  cartItems: CartProductType[] | [];
  setCartItems: (cartItems: CartProductType[] | []) => void;
}

export const useCartStore = create<CartItems>()(
  persist(
    (set) => ({
      cartItems: [],
      setCartItems: (cartItems) => set({ cartItems }),
    }),
    { name: "cart-storage" }
  )
);
