import Image from "next/image";
import { titleFont } from "@/config/fonts";

export default function Categories() {
  return (
    <section className="container mx-auto bg-gray rounded-[40px]  px-2 py-8 my-10">
      <header className="py-8">
        <h3 className=" text-4xl md:text-5xl font-extrabold text-center">
          BROWSE BY DRESS STYLE
        </h3>
      </header>
      <div className=" md:w-[90%] mx-auto h-[580px] grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-4">
        <div className="cursor-pointer col-span-1 row-span-1 rounded-[20px] bg-white overflow-hidden relative group">
          <Image
            src="/images/categories/casual.png"
            alt="casual"
            width={250}
            height={270}
            className="object-cover h-full absolute right-0 w-[60%] group-hover:scale-105 transition overflow-hidden"
          />
          <header className="p-4">
            <p className={`${titleFont.className} text-4xl font-bold`}>
              Casual
            </p>
          </header>
        </div>
        <div className="cursor-pointer md:col-span-2 row-span-1 rounded-[20px] bg-white overflow-hidden relative group">
          <Image
            src="/images/categories/formal.png"
            alt="formal"
            width={500}
            height={260}
            className="object-cover h-full absolute right-0 w-[60%] group-hover:scale-105 transition overflow-hidden"
          />
          <header className="p-4">
            <p className={`${titleFont.className} text-4xl font-bold`}>
              Formal
            </p>
          </header>
        </div>

        <div className="cursor-pointer md:col-span-2 row-span-1 rounded-[20px] bg-white overflow-hidden relative group">
          <Image
            src="/images/categories/party.png"
            alt="party"
            width={500}
            height={260}
            className="object-cover h-full absolute right-0 w-[60%] group-hover:scale-105 transition overflow-hidden"
          />
          <header className="p-4">
            <p className={`${titleFont.className} text-4xl font-bold`}>Party</p>
          </header>
        </div>
        <div className="cursor-pointer col-span-1 row-span-1 rounded-[20px] bg-white overflow-hidden relative group">
          <Image
            src="/images/categories/gym.png"
            alt="gym"
            width={250}
            height={270}
            className="object-cover h-full absolute right-0 w-[60%] group-hover:scale-105 transition overflow-hidden"
          />
          <header className="p-4">
            <p className={`${titleFont.className} text-4xl font-bold`}>Gym</p>
          </header>
        </div>
      </div>
    </section>
  );
}
