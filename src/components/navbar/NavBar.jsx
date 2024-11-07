import { useState, useEffect } from "react";
import Logo from "../logo/Logo";
import MenuButton from "./MenuButton";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import useAuthStore from "../../store/useAuthStore";

const Navbar = () => {
  const { isLoggedIn, isAdmin, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 transition-all duration-300 ${
        isScrolled ? "rounded-b-xl bg-gray-50 shadow-md py-2" : "bg-white py-3"
      } w-full`}
    >
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
