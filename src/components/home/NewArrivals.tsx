import BtnViewAll from "@/components/shared/BtnViewAll";
import { Suspense } from "react";
import { CardProductsSkeletons } from "@/components/shared/Skeletons";
import ListCategoryProductsCards from "@/components/shared/ListCategoryProductsCards";
import TitleSection from "@/components/shared/TitleSection";

export default function NewArrivals() {
  return (
    <section className=" py-4 px-2">
      <TitleSection title="New Arrivals" />
      <Suspense fallback={<CardProductsSkeletons />}>
        <ListCategoryProductsCards categoryCode="smartphones" limit={4} />
      </Suspense>
      <footer className=" flex justify-center items-center py-5">
        <BtnViewAll />
      </footer>
    </section>
  );
}
