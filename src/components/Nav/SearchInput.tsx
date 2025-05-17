"use client";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Suspense } from "react";

export function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const debouncedHandle = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleSearch = (term: string) => {
    if (pathname !== "/products") {
      replace(`/products`);
    }
    debouncedHandle(term);
  };

  return (
    <div className="bg-gray hidden md:flex gap-2 rounded-full h-full px-4">
      <Image
        src="/icons/search-input.png"
        alt="cart"
        width={24}
        height={24}
        className="object-contain"
      />
      <input
        className="focus:outline-none "
        type="text"
        placeholder="Search for products"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
}

export default function SearchInputWrapper() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <SearchInput />
    </Suspense>
  );
}
