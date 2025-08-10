import { NavLink } from "react-router-dom";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/cart", label: "Cart" },
  { to: "/checkout", label: "Checkout" },
  { to: "/orders", label: "Orders" },
];
const NavLinks = ({ onClick }) =>
  navLinks.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm font-medium px-3 py-2 rounded-md transition ${
          isActive
            ? "bg-black text-white dark:bg-white dark:text-black"
            : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-zinc-800"
        }`
      }
    >
      {label}
    </NavLink>
  ));

export default NavLinks;
