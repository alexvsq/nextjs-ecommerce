import Image from "next/image";

export default function Pagination() {
  return (
    <section className="flex justify-between items-center">
      <button className="flex items-center gap-2 border border-black/10 rounded-[8px] px-4 py-2 cursor-pointer">
        <Image
          src="/icons/arrow.png"
          alt="arrow left"
          width={20}
          height={20}
          className="rotate-180"
        />
        <p className="font-medium">Previous</p>
      </button>
      <p>Pagination</p>
      <button className="flex items-center gap-2 border border-black/10 rounded-[8px] px-4 py-2 cursor-pointer">
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
