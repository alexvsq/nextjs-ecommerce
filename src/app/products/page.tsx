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
  const { search, categories, page } = await searchParams;

  const filters: getAllProductsFilters = {};

  if (search && typeof search === "string") {
    filters.search = search;
  }
  if (categories && typeof categories === "string") {
    filters.categories = categories;
  }
  if (page && typeof page === "string") {
    filters.page = Number(page);
  }

  const suspenseKey = `${filters.search || ""}-${filters.categories || ""} ${
    filters.page
  }`;

  return (
    <section className="container mx-auto flex gap-4 py-2 md:py-8">
      <FilterSide />
      <Suspense key={suspenseKey} fallback={<CardProductsContentSkeletons />}>
        <Content filters={filters} />
      </Suspense>
    </section>
  );
}
