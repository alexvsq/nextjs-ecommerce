import DivisorLine from "@/components/shared/DivisorLine";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import TopSelling from "@/components/home/TopSelling";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <DivisorLine />
      <TopSelling />
      <Categories />
    </div>
  );
}
