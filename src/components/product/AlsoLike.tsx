import TitleSection from "@/components/shared/TitleSection";
import ListCategoryProductsCards from "@/components/shared/ListCategoryProductsCards";

export default function AlsoLike({ categoryCode }: { categoryCode: string }) {
  return (
    <section className="py-6">
      <TitleSection title="You Might Also Like" />

      <ListCategoryProductsCards categoryCode={categoryCode} limit={5} />
    </section>
  );
}
