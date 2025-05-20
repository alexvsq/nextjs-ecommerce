import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MenuCategoriesMobile from "@/components/Nav/CategoriesNavMobile";

const navItems = [
  {
    name: "On Sale",
    path: "#",
  },
  {
    name: "New Arrivals",
    path: "#",
  },
  {
    name: "Brands",
    path: "#",
  },
];

export default function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/icons/menu-mobile.png"
          alt="menu-mobile"
          width={24}
          height={24}
          className="cursor-pointer md:hidden "
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base">
                Categories
              </AccordionTrigger>
              <AccordionContent>
                <MenuCategoriesMobile />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <div key={index}>
                <p className="cursor-pointer">{item.name}</p>
              </div>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
