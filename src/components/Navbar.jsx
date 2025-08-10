import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { Button, Sheet, SheetTrigger, SheetContent } from "./ui";
import { ModeToggle } from "./mode-toggle";
import { useSelector } from "react-redux";

import NavLinks from "./NavLink";

const Navbar = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="w-full border-b border-border bg-white dark:bg-black">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-16">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          Comfy
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-4">
          <NavLinks />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          <NavLink to="/cart" className="relative">
            <BsCart3 className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-black text-white dark:bg-white dark:text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {numItemsInCart}
            </span>
          </NavLink>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <FaBarsStaggered className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4">
              <nav className="flex flex-col space-y-2">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
