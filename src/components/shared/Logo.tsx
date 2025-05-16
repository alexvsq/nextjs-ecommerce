import Link from "next/link";
import { titleFont } from "@/config/fonts";

export default function Logo() {
  return (
    <Link href="/">
      <p className={`text-2xl md:text-3xl font-bold ${titleFont.className}`}>
        E-COMMERCE
      </p>
    </Link>
  );
}
