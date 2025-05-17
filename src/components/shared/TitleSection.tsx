import { titleFont } from "@/config/fonts";

export default function TitleSection({ title }: { title: string }) {
  return (
    <h3
      className={`${titleFont.className} text-4xl md:text-5xl font-bold text-center py-5 md:py-6`}
    >
      {title}
    </h3>
  );
}
