"use client";
import { ProductType } from "@/types/types";
import { useState } from "react";
import Image from "next/image";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import toast from "react-hot-toast";

export default function AddToCart({ product }: { product: ProductType }) {
  const { addToCart } = useShoppingCart();
  const [itemCount, setItemCount] = useState(1);

  const handleMinus = () => {
    setItemCount(itemCount > 1 ? itemCount - 1 : 1);
  };
  const handlePlus = () => {
    setItemCount(itemCount + 1);
  };

  const handleAddToCart = () => {
    const result = addToCart(product, itemCount);
    toast.success(result);
  };

  return (
    <section className="flex h-[50px] gap-4">
      <div className="bg-gray rounded-full flex items-center gap-4 px-4">
        <Image
          onClick={handleMinus}
          src="/icons/minus.png"
          alt="cart"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="flex justify-center items-center min-w-[25px]">
          <p>{itemCount}</p>
        </div>
        <Image
          onClick={handlePlus}
          src="/icons/plus.png"
          alt="cart"
          width={22}
          height={22}
          className="cursor-pointer"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className=" bg-black rounded-full text-white cursor-pointer flex flex-1 justify-center items-center"
      >
        Add to Cart
      </button>
    </section>
  );
}
