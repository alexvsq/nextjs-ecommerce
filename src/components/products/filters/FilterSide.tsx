import CategoriesList from "@/components/products/filters/CategoriesList";
import Image from "next/image";
import DivisorLine from "@/components/shared/DivisorLine";
import { Suspense } from "react";

export default function FilterSide() {
  return (
    <aside className="hidden lg:block min-w-[285px] max-w-[290px] h-fit border border-black/10 rounded-[20px] p-4">
      <header className="flex justify-between items-center">
        <p className="text-lg font-bold">Filters</p>
        <Image src="/icons/filters.png" alt="filters" width={24} height={24} />
      </header>

      <DivisorLine className="my-3 px-2" />

      <Suspense fallback={<p>loading...</p>}>
        <CategoriesList />
      </Suspense>

      <DivisorLine className="my-3 px-2" />
    </aside>
  );
}
