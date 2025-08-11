import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };

  return (
    <header className="bg-muted text-muted-foreground py-2 border-b border-border">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <h1 className="text-lg font-bold">Вітаємо, {user.username}</h1>
            <div className="flex items-center gap-4">
              <button
                className="text-xs sm:text-sm hover:underline underline-offset-4 transition-colors"
                onClick={handleLogout}
              >
                Вийти
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              to="/login"
              className="text-xs sm:text-sm hover:underline underline-offset-4 transition-colors"
            >
              Увійти / Гість
            </Link>
            <Link
              to="/register"
              className="text-xs sm:text-sm hover:underline underline-offset-4 transition-colors"
            >
              Створити обліковий запис
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
