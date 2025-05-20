import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import CategoriesNav from "./CategoriesNav";

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

export default function NavButtons() {
  return (
    <div className="hidden md:flex gap-1 items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base ">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-[200px] p-2">
              <CategoriesNav />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ul className="hidden md:flex gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <p className="cursor-pointer">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
