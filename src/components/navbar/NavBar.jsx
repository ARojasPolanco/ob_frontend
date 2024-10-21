import { useState } from "react";
import Logo from "../logo/Logo";
import MenuButton from "./MenuButton";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-4 bg-white shadow-md w-full">
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <DropdownMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
