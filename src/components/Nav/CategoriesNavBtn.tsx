"use client";
import { useRouter } from "next/navigation";

export default function CategoriesNavBtn({ category }: { category: string }) {
  const { replace } = useRouter();

  const handleClick = () => {
    const params = new URLSearchParams();
    params.set("categories", category);
    replace(`/products?${params.toString()}`);
  };

  return (
    <p
      onClick={handleClick}
      className="text-sm text-black/60 capitalize hover:text-black transition cursor-pointer"
    >
      {category.replaceAll("-", " ")}
    </p>
  );
}
