"use client";
import { ProductType } from "@/types/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import toast from "react-hot-toast";
import NumberFlow from "@number-flow/react";
import { useCartStore } from "@/stores/cartStore";

export default function AddToCart({ product }: { product: ProductType }) {
  const { addToCart, removeFromCart } = useShoppingCart();
  const { cartItems } = useCartStore();
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
  const handleRemoveFromCart = () => {
    const result = removeFromCart(product.id);
    toast.success(result);
    setItemCount(1);
  };

  const isInCart = cartItems.find((item) => item.product.id === product.id);

  useEffect(() => {
    if (isInCart) {
      setItemCount(isInCart.quantity);
    }
  }, []);

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
          <p>
            <NumberFlow value={itemCount} />
          </p>
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
      <div className="flex gap-1 flex-1">
        <button
          onClick={handleAddToCart}
          className=" bg-black rounded-full text-white cursor-pointer  flex-1 justify-center items-center"
        >
          Add to Cart
        </button>
        {isInCart && (
          <button
            onClick={handleRemoveFromCart}
            className=" bg-red rounded-full text-white cursor-pointer hidden md:flex flex-1 justify-center items-center"
          >
            Delete from Cart
          </button>
        )}
      </div>
    </section>
  );
}
