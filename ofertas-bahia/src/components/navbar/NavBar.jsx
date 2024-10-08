import { useState } from "react";
import Logo from "../logo/Logo";
import MenuButton from "./MenuButton";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-4 bg-white shadow-md w-full">
      {/* Menu button on the left */}
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* Logo in the center */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo />
      </div>

      {/* Dropdown menu */}
      <DropdownMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
