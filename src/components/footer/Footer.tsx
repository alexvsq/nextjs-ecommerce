import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Logo from "@/components/shared/Logo";
import SocialMediaBtns from "@/components/footer/SocialMediaBtns";
import DivisorLine from "@/components/shared/DivisorLine";
import Payments from "@/components/footer/Payments";

const footerItems = [
  {
    name: "COMPANY",
    links: [
      {
        name: "About",
        url: "#",
      },
      {
        name: "Features",
        url: "#",
      },
      {
        name: "Works",
        url: "#",
      },
      {
        name: "Career",
        url: "#",
      },
    ],
  },
  {
    name: "HELP",
    links: [
      {
        name: "Customer Support",
        url: "#",
      },
      {
        name: "Delivery Details",
        url: "#",
      },
      {
        name: "Terms & Conditions",
        url: "#",
      },
      {
        name: "Privacy Policy",
        url: "#",
      },
    ],
  },
  {
    name: "FAQ",
    links: [
      {
        name: "Account",
        url: "#",
      },
      {
        name: "Manage Deliviveries",
        url: "#",
      },
      {
        name: "Orders",
        url: "#",
      },
      {
        name: "Payments",
        url: "#",
      },
    ],
  },
  {
    name: "RESOURCES",
    links: [
      {
        name: "Free eBooks",
        url: "#",
      },
      {
        name: "Development Tutorial",
        url: "#",
      },
      {
        name: "How to - Blog",
        url: "#",
      },
      {
        name: "Youtube Playlist",
        url: "#",
      },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative w-full mt-[100px]">
      <div className="absolute -top-[84px] w-full px-2">
        <header className="container mx-auto flex flex-col md:flex-row gap-5 md:gap-0 justify-around items-center bg-black rounded-[20px] px-2 py-6">
          <div
            className={`${titleFont.className} text-white font-bold text-4xl md:text-[40px]`}
          >
            <p>STAY UP TO DATE ABOUT</p>
            <p>OUR LATEST OFFERS</p>
          </div>

          <aside className=" flex flex-col gap-3 w-[349px]">
            <div className="bg-white rounded-full flex gap-2 items-center px-4 py-2">
              <Image
                src="/icons/email-input.png"
                alt="email-input"
                width={24}
                height={24}
                className="object-contain"
              />
              <input
                className="focus:outline-none "
                placeholder="Enter your email address"
                type="text"
              />
            </div>
            <button className="bg-white rounded-full py-2">
              Suscribe to Newsletter
            </button>
          </aside>
        </header>
      </div>
      <footer className="bg-black/10 flex flex-col gap-10 w-full pt-[220px] md:pt-[110px] pb-10 ">
        <div className="container mx-auto flex flex-col md:flex-row gap-5 px-2">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-black/60 text-lg md:text-xs md:max-w-[30ch]">
              We have clothes that suits your style and wich you're proud to
              wear. from women to men
            </p>
            <SocialMediaBtns />
          </div>

          <aside className="flex flex-1 flex-wrap gap-5 md:gap-1 justify-between">
            {footerItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p className="text-black font-medium">{item.name}</p>
                <footer className="flex flex-col gap-2">
                  {item.links.map((link, index) => (
                    <p
                      key={index}
                      className="text-black/60 font-light hover:text-black hover:cursor-pointer transition"
                    >
                      {link.name}
                    </p>
                  ))}
                </footer>
              </div>
            ))}
          </aside>
        </div>
        <DivisorLine />

        <div className=" container mx-auto flex flex-col gap-3 md:flex-row justify-center items-center md:justify-between">
          <p className="text-black/60">
            E-commerce {currentYear}, All rights reserved.
          </p>

          <Payments />
        </div>
      </footer>
    </section>
  );
}
