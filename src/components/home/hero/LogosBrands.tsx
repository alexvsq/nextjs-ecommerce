import Image from "next/image";
import Marquee from "react-fast-marquee";

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

export default function LogosBrands() {
  return (
    <Marquee pauseOnHover speed={20} className="bg-black py-4">
      <div className="flex items-center md:justify-around gap:4 md:w-screen gap-10 px-4">
        {LOGOS.map((logo, index) => (
          <a href={logo.url} key={index} target="_blank" rel="noreferrer">
            <div className="w-32 h-9 sm:w-40 sm:h-10 md:w-[156px]  md:h-[36px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={192}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </Marquee>
  );
}
