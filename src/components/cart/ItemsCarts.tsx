"use client";
import CardItem from "@/components/cart/CardItem";
import { useCartStore } from "@/stores/cartStore";
import DivisorLine from "@/components/shared/DivisorLine";

export default function ItemsCarts() {
  const { cartItems } = useCartStore();

  return (
    <div className="flex flex-col gap-4 md:col-span-2 border border-black/10 rounded-[20px] py-4 md:p-4 min-h-[250px]">
      {cartItems.map((item, index) => (
        <div key={index}>
          <CardItem product={item} />
        </div>
      ))}
    </div>
  );
}
