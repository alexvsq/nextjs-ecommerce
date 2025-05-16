import Image from "next/image";

const payments = [
  {
    name: "visa",
    icon: "/logos/visa.png",
    url: "https://www.visa.com",
  },
  {
    name: "mastercard",
    icon: "/logos/mastercard.png",
    url: "https://www.mastercard.com",
  },
  {
    name: "paypal",
    icon: "/logos/paypal.png",
    url: "https://www.paypal.com",
  },
  {
    name: "apple pay",
    icon: "/logos/applepay.png",
    url: "https://www.apple.com",
  },
  {
    name: "google pay",
    icon: "/logos/googlepay.png",
    url: "https://www.google.com",
  },
];

export default function Payments() {
  return (
    <div className="flex gap-2">
      {payments.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-sm  w-12 h-8 p-1 flex justify-center items-center"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={100}
            height={100}
            className="w-full h-full object-contain "
          />
        </a>
      ))}
    </div>
  );
}
