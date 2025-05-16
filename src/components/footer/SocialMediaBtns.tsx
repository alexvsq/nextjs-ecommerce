import Image from "next/image";

const socialMedia = [
  {
    name: "twitter",
    url: "https://twitter.com",
    icon: "/icons/twitter.svg",
  },
  {
    name: "facebook",
    url: "https://facebook.com",
    icon: "/icons/facebook.svg",
  },
  {
    name: "instagram",
    url: "https://instagram.com",
    icon: "/icons/instagram.svg",
  },
  {
    name: "github",
    url: "https://github.com",
    icon: "/icons/github.svg",
  },
];

export default function SocialMediaBtns() {
  return (
    <article className="flex gap-3">
      {socialMedia.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-full  w-8 h-8 p-[6px] flex justify-center items-center group hover:invert transition"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={20}
            height={20}
            className="w-full h-full object-contain "
          />
        </a>
      ))}
    </article>
  );
}
