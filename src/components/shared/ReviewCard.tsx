import Image from "next/image";
import { ReviewType } from "@/types/types";

export default function ReviewCard({ review }: { review: ReviewType }) {
  const dateLocal = new Date(review.date);
  const dateLocalString = dateLocal.toLocaleDateString();

  return (
    <article className=" border border-black/10 rounded-[20px] p-4">
      <header className="flex justify-between items-center">
        <Image src="/icons/rating.png" alt="rating" width={160} height={20} />
        <Image
          src="/icons/menu-review.png"
          alt="rating"
          width={25}
          height={25}
        />
      </header>
      <div className="py-2">
        <p className="flex gap-2 text-lg font-bold">
          {review.reviewerName}
          <Image
            src="/icons/check.png"
            alt="check"
            width={22}
            height={22}
            className="object-contain"
          />
        </p>
      </div>
      <p className="text-black/60 ">"{review.comment}"</p>
      <p className="text-black/60">{dateLocalString}</p>
    </article>
  );
}
