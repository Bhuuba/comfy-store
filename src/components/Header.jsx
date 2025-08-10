import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-muted text-muted-foreground py-2 border-b border-border">
      <div className="align-element flex justify-center sm:justify-end items-center gap-6">
        <Link
          to="/login"
          className="text-xs sm:text-sm hover:underline underline-offset-4 transition-colors"
        >
          Sign in / Guest
        </Link>
        <Link
          to="/register"
          className="text-xs sm:text-sm hover:underline underline-offset-4 transition-colors"
        >
          Create an Account
        </Link>
      </div>
    </header>
  );
};

export default Header;
