import Image from "next/image";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

const LOGOS = [
  {
    src: "/logos/versace.png",
    alt: "versace",
    url: "https://www.versace.com",
  },
  {
    src: "/logos/zara.png",
    alt: "zara",
    url: "https://www.zara.com",
  },
  {
    src: "/logos/gucci.png",
    alt: "gucci",
    url: "https://www.gucci.com",
  },
  {
    src: "/logos/prada.png",
    alt: "prada",
    url: "https://www.prada.com",
  },
  {
    src: "/logos/calvin-klein.png",
    alt: "calvin-klein",
    url: "https://www.calvinklein.com",
  },
];

export default function Hero() {
  return (
    <div className="bg-hero w-full md:h-screen flex flex-col pt-5">
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
            <article>
              <p className=" text-4xl font-bold">200+</p>
              <p className=" text-xs text-black/60">International Brands</p>
            </article>
            <div className="h-[52px] w-[1px] bg-black/10" />
            <article>
              <p className=" text-4xl font-bold">2,000+</p>
              <p className=" text-xs text-black/60">High-Quality Products</p>
            </article>
            <div className="h-[52px] w-[1px] bg-black/10 hidden md:block" />
            <article>
              <p className=" text-4xl font-bold">30,000+</p>
              <p className=" text-xs text-black/60">Happy Customers</p>
            </article>
          </footer>
        </aside>

        <div className="md:w-[40%] h-full  relative overflow-hidden">
          <div className="md:absolute md:top-0 right-0 w-full h-full">
            <Image
              className="w-full h-full object-cover object-top "
              src="/images/hero.png"
              alt="hero-image"
              width={1000}
              height={600}
            />
          </div>
        </div>
      </div>

      <footer className=" bg-black w-full md:h-[90px]">
        <div className="container mx-auto h-full flex flex-wrap justify-between items-center gap-4 py-4 px-2 md:px-0">
          {LOGOS.map((logo, index) => (
            <a href={logo.url} key={index} target="_blank" rel="noreferrer">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="cursor-pointer"
              />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
