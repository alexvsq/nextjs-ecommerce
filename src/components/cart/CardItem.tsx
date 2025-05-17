"use client";
import { CartProductType } from "@/types/types";
import Image from "next/image";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import toast from "react-hot-toast";
import Link from "next/link";

export default function CardItem({ product }: { product: CartProductType }) {
  const { removeFromCart } = useShoppingCart();

  const priceWithDiscount = product.product.discountPercentage
    ? (
        product.product.price *
        (1 - product.product.discountPercentage / 100)
      ).toFixed(2)
    : product.product.price;

  console.log(
    product.product.price,
    product.product.discountPercentage,
    priceWithDiscount
  );

  const handleTrashBtn = () => {
    const result = removeFromCart(product.product.id);
    toast.success(result);
  };

  return (
    <article className="h-[99px]  md:h-[125px] flex justify-between items-center p-2">
      <div className="flex gap-4 h-full">
        <Link
          href={`/product/${product.product.id}`}
          className="h-full aspect-square rounded-[20px] bg-gray"
        >
          <Image
            src={product.product.thumbnail}
            alt={product.product.title}
            width={124}
            height={124}
            className="w-full h-full object-cover"
          />
        </Link>
        <div className=" flex flex-col md:gap-1">
          <p className="md:text-lg font-bold">{product.product.title}</p>
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

        <footer className="flex flex-col md:flex-row items-center gap-2 text-sm">
          <p className="text-black">Quantity:</p>
          <p className="bg-gray px-4 py-1 rounded-full">{product.quantity}</p>
        </footer>
      </aside>
    </article>
  );
}
