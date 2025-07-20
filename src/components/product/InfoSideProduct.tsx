import { ProductType } from "@/types/types";
import { titleFont } from "@/config/fonts";
import DivisorLine from "@/components/shared/DivisorLine";
import AddToCart from "@/components/product/AddToCart";
import Image from "next/image";

export default function InfoSideProduct({ product }: { product: ProductType }) {
  const priceWithDiscount = product.discountPercentage
    ? (product.price * (1 - product.discountPercentage / 100))
    : product.price;

  return (
    <article className="px-2 flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <h2
          className={` ${titleFont.className} text-3xl md:text-5xl font-bold`}
        >
          {product.title}
        </h2>
        <p className=" text-sm text-black/60">{product.brand}</p>
        <Image src="/icons/rating.png" alt="rating" width={180} height={22} />
        <div className="flex gap-2 flex-wrap items-center">
          <p className="text-2xl font-bold">${priceWithDiscount.toLocaleString()}</p>
          {product.discountPercentage && (
            <>
              <p className="text-black/40 text-2xl line-through">
                ${product.price.toLocaleString()}
              </p>
              <p className="bg-red/10 text-red px-2 py-1 rounded-full text-lg font-light">
                -{product.discountPercentage.toLocaleString()}%
              </p>
            </>
          )}
        </div>
      </header>

      <DivisorLine />

      <p className="text-black/60 text-sm md:text-base">
        {product.description}
      </p>

      <DivisorLine />

      <article>
        <p className="text-black/60 mb-3">Tags</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray text-black/60 px-4 py-2 rounded-full font-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      <DivisorLine />

      <AddToCart product={product} />
    </article>
  );
}
