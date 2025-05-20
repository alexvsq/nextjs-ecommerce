import { getAllCategories } from "@/api/api";
import CategoriesNavBtn from "@/components/Nav/CategoriesNavBtn";

export default async function CategoriesNav() {
  const categories = await getAllCategories();

  return (
    <>
      {categories ? (
        <article className="grid grid-cols-3 gap-1 min-w-[450px]">
          {categories.map((category) => (
            <div key={category}>
              <CategoriesNavBtn category={category} />
            </div>
          ))}
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
