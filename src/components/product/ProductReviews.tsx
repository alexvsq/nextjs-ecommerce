import { ProductType, ReviewType } from "@/types/types";
import ReviewCard from "@/components/shared/ReviewCard";

export default function ProductRatings({ Reviews }: { Reviews: ReviewType[] }) {
  return (
    <section className="py-2">
      <header>
        <h3 className="text-2xl font-bold">
          All Reviews{" "}
          <span className="text-base font-medium text-black/60">
            ({Reviews.length})
          </span>
        </h3>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        {Reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}
