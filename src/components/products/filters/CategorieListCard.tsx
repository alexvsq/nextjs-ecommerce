"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategorieListCard({ item }: { item: string }) {
  const { replace } = useRouter();

  const handleClick = (category: string) => {
    const params = new URLSearchParams();
    params.set("categories", category);
    replace(`/products?${params.toString()}`);
  };

  return (
    <div
      onClick={() => handleClick(item)}
      className="flex justify-between items-center cursor-pointer"
    >
      <p className="text-black/60 capitalize">{item}</p>
      <Image
        src="/icons/arrow-category.png"
        alt="arrow-category"
        width={20}
        height={20}
      />
    </div>
  );
}
