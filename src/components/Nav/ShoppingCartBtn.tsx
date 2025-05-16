"use client";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";

export default function CartBtn() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Link href="/cart" className="relative h-6 w-6">
      {cartItems.length > 0 && (
        <p className="absolute -top-2 -right-2 bg-red text-white text-xs px-[4px] py-[2px] rounded-xl">
          {cartItems.length}
        </p>
      )}
      <Image
        src="/icons/cart.png"
        alt="cart"
        width={24}
        height={24}
        className="cursor-pointer h-full w-full"
      />
    </Link>
  );
}
