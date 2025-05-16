"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategorieListCard() {
  const { replace } = useRouter();

  const handleClick = () => {
    const params = new URLSearchParams();
    params.delete("categories");
    replace(`/products?${params.toString()}`);
  };

  return (
    <div
      onClick={() => handleClick()}
      className="flex justify-between items-center cursor-pointer"
    >
      <p className="text-black capitalize">All Products</p>
      <Image
        src="/icons/arrow-category.png"
        alt="arrow-category"
        width={20}
        height={20}
      />
    </div>
  );
}
