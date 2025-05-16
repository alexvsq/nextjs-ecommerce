// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardProductSkeleton() {
  return (
    <article className={`min-w-[285px] w-[295px]`}>
      <div
        className={`${shimmer} relative overflow-hidden flex flex-col gap-2`}
      >
        <div className="bg-gray h-[241px] rounded-[20px] " />
        <div className="bg-gray h-[40px] rounded-[10px] " />
        <div className="bg-gray w-[100px] h-[35px] rounded-[10px] " />
      </div>
    </article>
  );
}

export function CardProductsSkeletons() {
  return (
    <div className="container mx-auto flex  justify-between gap-5 w-full overflow-x-auto py-10">
      <CardProductSkeleton />
      <CardProductSkeleton />
      <CardProductSkeleton />
      <CardProductSkeleton />
    </div>
  );
}

export function CardProductsContentSkeletons() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 min-h-screen">
      <CardProductSkeleton />
      <CardProductSkeleton />
      <CardProductSkeleton />
      <CardProductSkeleton />
      <CardProductSkeleton />
    </div>
  );
}

export function ProductSkeleton() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 py-8 px-2 md:px-0">
      <article className="md:w-1/2 flex flex-col-reverse md:flex-row gap-3">
        <aside className="flex flex-row md:flex-col gap-3 ">
          <div
            className={`${shimmer} relative overflow-hidden flex flex-col gap-2`}
          >
            <div className="bg-gray w-[140px] aspect-square rounded-[20px] " />
          </div>
          <div
            className={`${shimmer} relative overflow-hidden flex flex-col gap-2`}
          >
            <div className="bg-gray w-[140px] aspect-square rounded-[20px] " />
          </div>
          <div
            className={`${shimmer} relative overflow-hidden flex flex-col gap-2`}
          >
            <div className="bg-gray w-[140px] aspect-square rounded-[20px] " />
          </div>
        </aside>

        <div
          className={`${shimmer} relative overflow-hidden flex flex-col gap-2 w-full`}
        >
          <div className="bg-gray w-full h-full aspect-square rounded-[20px] " />
        </div>
      </article>

      <article className="md:w-1/2 py-4 flex flex-col gap-3">
        <div
          className={`${shimmer} relative overflow-hidden flex flex-col gap-2 w-full`}
        >
          <div className="bg-gray w-full h-[40px] aspect-square rounded-lg " />
        </div>
        <div
          className={`${shimmer} relative overflow-hidden flex flex-col gap-2 w-full`}
        >
          <div className="bg-gray w-[200px] h-[40px] aspect-square rounded-lg " />
        </div>

        <div
          className={`${shimmer} relative overflow-hidden flex flex-col gap-2 w-full`}
        >
          <div className="bg-gray w-full h-[200px] aspect-square rounded-lg " />
        </div>
        <div
          className={`${shimmer} relative overflow-hidden flex flex-col gap-2 w-full`}
        >
          <div className="bg-gray w-full h-[100px] aspect-square rounded-lg " />
        </div>
      </article>
    </div>
  );
}
