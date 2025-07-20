import Image from "next/image";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import NumberEffectHero from "@/components/home/hero/NumberEffectHero";
import LogosBrands from "@/components/home/hero/LogosBrands";

export default function Hero() {
  return (
    <div className="bg-hero w-full md:h-[663px] flex flex-col pt-5">
      <div className="container mx-auto w-full flex flex-col md:flex-1 md:flex-row">
        <aside className=" flex flex-col justify-center gap-4 px-2 text-center md:text-start md:w-[60%]">
          <article
            className={`${titleFont.className} text-5xl md:text-6xl font-bold tracking-wide md:tracking-widest`}
          >
            <p>FIND CLOTHES</p>
            <p>THAT MATCHES</p>
            <p>YOUR STYLE</p>
          </article>
          <p className=" text-black/60 max-w-[60ch]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out individuality and cater to your sense of
            style.
          </p>

          <Link
            href="/products"
            className="bg-black flex justify-center items-center w-full md:w-[200px] h-[50px] rounded-full text-white cursor-pointer"
          >
            Show Now
          </Link>

          <footer className="flex gap-4 py-4 flex-wrap justify-center md:justify-normal">
            <NumberEffectHero targetNumber={180} title="International Brands" />

            <div className="h-[52px] w-[1px] bg-black/10" />

            <NumberEffectHero
              targetNumber={2500}
              title="High-Quality Products"
            />
            <div className="h-[52px] w-[1px] bg-black/10 hidden md:block" />
            <NumberEffectHero targetNumber={30000} title="Happy Customers" />
          </footer>
        </aside>

        <div className="md:w-[40%] h-full w-full  relative overflow-hidden">
          <div className="md:absolute md:bottom-0 right-0 w-full h-full">
            <Image
              className="w-full h-full object-contain"
              src="/images/hero.png"
              alt="hero-image"
              width={1000}
              height={700}
            />
          </div>
          <Image
            src="/images/star-hero.png"
            alt="hero-image"
            width={1000}
            height={600}
            className="w-20 h-20 absolute top-5 right-5"
          />
          <Image
            src="/images/star-hero.png"
            alt="hero-image"
            width={1000}
            height={600}
            className="w-15 h-15 absolute bottom-1/2 left-0"
          />
        </div>
      </div>
      <LogosBrands />
    </div>
  );
}
