import { getAllCategories } from "@/api/api";
import CategorieListCard from "@/components/products/filters/CategorieListCard";
import CategorieListCardAll from "@/components/products/filters/CategorieListCardAll";

export default async function CategoriesList() {
  const res = await getAllCategories();

  return (
    <article className="flex flex-col gap-2">
      <CategorieListCardAll />
      {res ? (
        res.map((item: string, index) => (
          <CategorieListCard key={index} item={item} />
        ))
      ) : (
        <p>error</p>
      )}
    </article>
  );
}
