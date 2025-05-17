"use client";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { clsx } from "clsx";

export default function Pagination({ totalItems }: { totalItems: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  // Update limit to 30 items per page as specified
  const ITEMS_PER_PAGE = 30;
  const pages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Don't render pagination if there are no pages or only one page
  if (pages <= 1) {
    return null;
  }

  const handleClick = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const generatePageNumbers = () => {
    const pageList: (number | string)[] = [];

    if (pages <= 4) {
      for (let i = 1; i <= pages; i++) {
        pageList.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageList.push(1, 2, 3, "...", pages - 1, pages);
      } else if (currentPage >= pages - 2) {
        pageList.push(1, 2, "...", pages - 2, pages - 1, pages);
      } else {
        pageList.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          pages
        );
      }
    }

    return pageList;
  };

  return (
    <section className="flex justify-between items-center">
      <button
        onClick={() => handleClick(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-2 border border-black/10 hover:bg-black/10 transition rounded-[8px] px-4 py-2 cursor-pointer disabled:opacity-50"
      >
        <Image
          src="/icons/arrow.png"
          alt="arrow left"
          width={20}
          height={20}
          className="rotate-180"
        />
        <p className="font-medium">Previous</p>
      </button>

      <div className="flex gap-2">
        {generatePageNumbers().map((item, index) => {
          if (item === "...") {
            return (
              <span
                key={index + "ellipsis"}
                className="px-2 py-2 text-gray-500"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={`page-${item}-${index}`}
              onClick={() => handleClick(Number(item))}
              className={clsx(
                "flex items-center rounded-[8px] px-4 py-2 cursor-pointer hover:bg-black/10 transition",
                currentPage === item
                  ? "bg-black/10 font-semibold"
                  : "text-gray-600"
              )}
            >
              <p>{item}</p>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => handleClick(Math.min(currentPage + 1, pages))}
        disabled={currentPage === pages}
        className="flex items-center gap-2 border border-black/10 hover:bg-black/10 transition rounded-[8px] px-4 py-2 cursor-pointer disabled:opacity-50"
      >
        <p className="font-medium">Next</p>
        <Image
          src="/icons/arrow.png"
          alt="arrow right"
          width={20}
          height={20}
        />
      </button>
    </section>
  );
}
