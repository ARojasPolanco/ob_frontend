import { IoMenu, IoClose } from "react-icons/io5";
//import { useState } from "react";

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="text-primary-500 focus:outline-none"
    >
      {isOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
    </button>
  );
};

export default MenuButton;
