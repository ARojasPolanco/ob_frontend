import { useEffect, useRef, useState } from "react";

import menuLogo from "../../assets/images/logo-ob1-removebg-preview.png";

const DropdownMenu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);
  const [selected, setSelected] = useState("");

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

  const handleSelect = (text) => {
    setSelected(text);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-primary-300 bg-opacity-20 backdrop-blur-sm z-10"></div>
      )}

      <div
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-64 h-auto pb-10 bg-white shadow-md z-20`}
      >
        <div className="flex flex-col items-center pt-1">
          <img src={menuLogo} alt="Logo del Menú" className="h-36 w-auto" />
        </div>

        <h2 className="text-sm text-start pl-12 font-normal mt-2 mb-4 text-black">
          Menú
        </h2>

        <ul className="w-full text-start pl-8 text-sm font-medium font-poppins space-y-3">
          <li>
            <button
              className={`${
                selected === "Carnes rojas"
                  ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
                  : "text-black"
              } px-4 py-2 rounded-full w-auto text-left`}
              onClick={() => handleSelect("Carnes rojas")}
            >
              Carnes rojas
            </button>
          </li>
          <li>
            <button
              className={`${
                selected === "Carnes blancas"
                  ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
                  : "text-black"
              } px-4 py-2 rounded-full w-auto text-left`}
              onClick={() => handleSelect("Carnes blancas")}
            >
              Carnes blancas
            </button>
          </li>
          <li>
            <button
              className={`${
                selected === "Bebidas c/alcohol"
                  ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
                  : "text-black"
              } px-4 py-2 rounded-full w-auto text-left`}
              onClick={() => handleSelect("Bebidas c/alcohol")}
            >
              Bebidas c/alcohol
            </button>
          </li>
          <li>
            <button
              className={`${
                selected === "Bebidas s/alcohol"
                  ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
                  : "text-black"
              } px-4 py-2 rounded-full w-auto text-left`}
              onClick={() => handleSelect("Bebidas s/alcohol")}
            >
              Bebidas s/alcohol
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
