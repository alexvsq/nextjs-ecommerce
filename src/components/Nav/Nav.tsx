import Image from "next/image";
import Logo from "@/components/shared/Logo";
import DivisorLine from "@/components/shared/DivisorLine";
import SearchInput from "@/components/Nav/SearchInput";
import ShoppingCartBtn from "@/components/Nav/ShoppingCartBtn";

const navItems = [
  {
    name: "Show",
    path: "/",
  },
  {
    name: "On Sale",
    path: "/",
  },
  {
    name: "New Arrivals",
    path: "/",
  },
  {
    name: "Brands",
    path: "/",
  },
];

export default function Nav() {
  return (
    <>
      <div className="fixed z-10 w-full">
        <div className="py-3 bg-white">
          <nav className=" container flex justify-between items-center mx-auto h-12">
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/menu-mobile.png"
                alt="menu-mobile"
                width={24}
                height={24}
                className="cursor-pointer md:hidden "
              />
              <Logo />
            </div>

            <ul className="hidden md:flex gap-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>

            <SearchInput />

            <div className=" flex gap-4">
              <Image
                src="/icons/search.png"
                alt="search"
                width={24}
                height={24}
                className="cursor-pointer md:hidden"
              />
              <ShoppingCartBtn />
              <Image
                src="/icons/user.png"
                alt="user"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          </nav>
        </div>

        <DivisorLine />
      </div>
      <div className="h-[73px] w-full" />
    </>
  );
}
