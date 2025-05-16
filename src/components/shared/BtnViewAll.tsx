import Link from "next/link";

export default function BtnViewAll() {
  return (
    <Link href="/products">
      <button className="w-[218px] h-[52px] flex justify-center items-center border hover:bg-gray transition border-black/10 rounded-full font-medium cursor-pointer">
        View All
      </button>
    </Link>
  );
}
