"use client";
import { CartProductType } from "@/types/types";
import Image from "next/image";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import toast from "react-hot-toast";
import Link from "next/link";
import NumberFlow from "@number-flow/react";

export default function CardItem({ product }: { product: CartProductType }) {
  const { removeFromCart, updateQuantity } = useShoppingCart();

  const smallTitle =
    product.product.title.length > 13
      ? product.product.title.slice(0, 13) + "..."
      : product.product.title;

  const priceWithDiscount = product.product.discountPercentage
    ? (
        product.product.price *
        (1 - product.product.discountPercentage / 100)
      ).toFixed(2)
    : product.product.price;

  const handleTrashBtn = () => {
    const result = removeFromCart(product.product.id);
    toast.success(result);
  };

  const handleMinus = () => {
    const newQuantity = product.quantity > 1 ? product.quantity - 1 : 1;
    updateQuantity(product.product.id, newQuantity);
  };
  const handlePlus = () => {
    const newQuantity = product.quantity + 1;
    updateQuantity(product.product.id, newQuantity);
  };

  return (
    <article className="h-[99px]  md:h-[125px] flex justify-between items-center p-2">
      <div className="flex gap-4 h-full">
        <Link
          href={`/product/${product.product.id}`}
          className="h-full aspect-square rounded-[20px] bg-gray group"
        >
          <Image
            src={product.product.thumbnail}
            alt={product.product.title}
            width={124}
            height={124}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </Link>
        <div className=" flex flex-col md:gap-1">
          <p className="block md:hidden md:text-lg font-bold">{smallTitle}</p>
          <p className="hidden md:block md:text-lg font-bold">
            {product.product.title}
          </p>
          <div className="text-xs md:text-sm text-black">
            <p>
              Brand:{" "}
              <span className="text-black/60">{product.product.brand}</span>
            </p>
            <p>
              Rating:{" "}
              <span className="text-black/60">{product.product.rating}</span>
            </p>
          </div>

          <footer className="flex items-center gap-2">
            <p className="text-base md:text-xl font-bold">
              ${priceWithDiscount}
            </p>
            {product.product.discountPercentage && (
              <p className="bg-red/10 text-red px-2 py-1 rounded-full text-xs font-light">
                -{product.product.discountPercentage}%
              </p>
            )}
          </footer>
        </div>
      </div>
      <aside className="flex flex-col h-full gap-2 items-end justify-between">
        <div onClick={handleTrashBtn} className="h-6 w-6 cursor-pointer">
          <Image
            src="/icons/trash.png"
            alt="trash"
            width={20}
            height={20}
            className="h-full w-full"
          />
        </div>

        <footer className="bg-gray rounded-full flex items-center gap-4 px-4 py-2">
          <Image
            onClick={handleMinus}
            src="/icons/minus.png"
            alt="cart"
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <div className="flex justify-center items-center min-w-[25px]">
            <p>
              <NumberFlow value={product.quantity} />
            </p>
          </div>
          <Image
            onClick={handlePlus}
            src="/icons/plus.png"
            alt="cart"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </footer>
      </aside>
    </article>
  );
}
