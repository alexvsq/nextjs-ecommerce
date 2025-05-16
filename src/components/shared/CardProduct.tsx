import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function CardProduct({ product }: { product: ProductType }) {
  const titleSmall =
    product.title.length > 26
      ? product.title.slice(0, 26) + "..."
      : product.title;

  const priceWithDiscount = product.discountPercentage
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : product.price;

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col min-w-[285px] group"
    >
      <header className="bg-card-image rounded-[20px] w-full aspect-square overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition"
        />
      </header>
      <footer className="flex flex-col gap-1 py-2">
        <p className="text-lg font-bold">{titleSmall}</p>

        <div className="flex gap-2 text-xl font-bold">
          <p className="">${priceWithDiscount}</p>

          {product.discountPercentage && (
            <div className="flex items-center gap-2">
              <p className="text-black/40 line-through">${product.price}</p>
              <p className="bg-red/10 text-red px-2 py-1 rounded-full text-xs font-light">
                -{product.discountPercentage}%
              </p>
            </div>
          )}
        </div>
      </footer>
    </Link>
  );
}
