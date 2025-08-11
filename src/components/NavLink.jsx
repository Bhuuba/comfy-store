import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navLinks = [
  { id: 1, to: "/", label: "Головна" },
  { id: 2, to: "/about", label: "Про нас" },
  { id: 3, to: "/products", label: "Товари" },
  { id: 4, to: "/cart", label: "Кошик" },
  { id: 5, to: "/checkout", label: "Оформлення" },
  { id: 6, to: "/orders", label: "Замовлення" },
];

const NavLinks = ({ onClick }) => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {navLinks.map(({ id, to, label }) => {
        if ((to === "/checkout" || to === "/orders") && !user) return null;
        return (
          <NavLink
            key={id}
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
        );
      })}
    </>
  );
};

export default NavLinks;
