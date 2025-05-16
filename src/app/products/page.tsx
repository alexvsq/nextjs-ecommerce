import { Suspense } from "react";
import FilterSide from "@/components/products/filters/FilterSide";
import Content from "@/components/products/Content";
import { getAllProductsFilters } from "@/types/types";
import { CardProductsContentSkeletons } from "@/components/shared/Skeletons";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { search, categories } = await searchParams;

  const filters: getAllProductsFilters = {};

  if (search && typeof search === "string") {
    filters.search = search;
  }
  if (categories && typeof categories === "string") {
    filters.categories = categories;
  }

  return (
    <section className="container mx-auto flex gap-4 py-8">
      <FilterSide />

      <Suspense fallback={<CardProductsContentSkeletons />}>
        <Content filters={filters} />
      </Suspense>
    </section>
  );
}
