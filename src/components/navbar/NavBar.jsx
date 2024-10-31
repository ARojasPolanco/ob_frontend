import { useState } from "react";
import Logo from "../logo/Logo";
import MenuButton from "./MenuButton";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import useAuthStore from "../../store/useAuthStore";

const Navbar = () => {
  const { isLoggedIn, isAdmin, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-3 bg-white shadow-md w-full">
      {/* Menú hamburguesa */}
      <div className="flex items-center">
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="hidden sm:flex items-center ml-auto space-x-9">
        {isLoggedIn && (
          <Link to="/">
            <Button variant="primary" onClick={logout}>
              Log Out
            </Button>
          </Link>
        )}
        {isAdmin && (
          <Link to="/register">
            <Button variant="secondary">Register</Button>
          </Link>
        )}
      </div>

      {/* Menú desplegable */}
      <DropdownMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
