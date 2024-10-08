import { useEffect, useRef } from "react";
import NavLink from "./NavLink";
import menuLogo from "../../assets/images/logo-ob1-removebg-preview.png";

const DropdownMenu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-primary-300 bg-opacity-20 backdrop-blur-sm z-10"></div>
      )}

      <div
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-2/3 h-2/3 bg-white shadow-md p-0 z-20`}
      >
        <div className="flex flex-col items-center">
          {" "}
          <img src={menuLogo} alt="Logo del Menú" className="h-48" />{" "}
        </div>
        <h2 className="text-sm text-start pl-8 font-medium mt-2 mb-4 text-black">
          Menú
        </h2>

        <ul className="w-full text-start pl-8 text-sm font-medium font-poppins space-y-3">
          <NavLink text="Carnes rojas" />
          <NavLink text="Carnes blancas" />
          <NavLink text="Bebidas c/alcohol" />
          <NavLink text="Bebidas s/alcohol" />
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
