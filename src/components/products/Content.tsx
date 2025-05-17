import { getAllProducts } from "@/api/api";
import { notFound } from "next/navigation";
import CardProduct from "@/components/shared/CardProduct";
import DivisorLine from "@/components/shared/DivisorLine";
import Pagination from "@/components/products/Pagination";
import { getAllProductsFilters } from "@/types/types";

export default async function Content({
  filters,
}: {
  filters: getAllProductsFilters;
}) {
  const res = await getAllProducts(filters);

  const title = filters.categories
    ? filters.categories.replaceAll("-", " ")
    : filters.search
    ? 'Results for "' + filters.search + '"'
    : "All Products";

  if (!res) {
    notFound();
  }
  return (
    <section className="w-full">
      <header className="flex justify-between items-center py-4">
        <h3 className="text-3xl font-bold capitalize">{title}</h3>
        <p className="text-black/60">
          Showing {res.skip} - {res.skip + res.limit} of {res.total}
        </p>
      </header>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {res.products.map((item, index) => {
          return <CardProduct key={index} product={item} />;
        })}
      </div>

      <DivisorLine className="my-8" />

      <Pagination totalItems={res.total} />
    </section>
  );
}
