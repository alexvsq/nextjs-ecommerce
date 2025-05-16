import { titleFont } from "@/config/fonts";
import BtnViewAll from "@/components/shared/BtnViewAll";
import ListCategoryProductsCards from "@/components/shared/ListCategoryProductsCards";
import { Suspense } from "react";
import { CardProductsSkeletons } from "@/components/shared/Skeletons";
import TitleSection from "@/components/shared/TitleSection";

export default function TopSelling() {
  return (
    <section className=" py-4 px-2">
      <TitleSection title="Top Selling" />
      <Suspense fallback={<CardProductsSkeletons />}>
        <ListCategoryProductsCards categoryCode="mens-watches" limit={4} />
      </Suspense>

      <footer className=" flex justify-center items-center py-5">
        <BtnViewAll />
      </footer>
    </section>
  );
}
