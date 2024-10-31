import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import menuLogo from "../../assets/images/logo-ob1-removebg-preview.png";
import PropTypes from "prop-types";
import Button from "../buttons/Button";

const DropdownMenu = ({ isOpen, toggleMenu }) => {
  const { isLoggedIn, isAdmin, logout } = useAuthStore();
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
    toggleMenu();
  };

  const renderButton = (text) => (
    <button
      className={`${
        selected === text
          ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
          : "text-titles-menu"
      } px-4 py-2 rounded-full w-auto text-left`}
      onClick={() => handleSelect(text)}
    >
      {text}
    </button>
  );

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

        <h2 className="text-sm text-start pl-12 font-normal mt-2 mb-4 text-titles-menu">
          Menú
        </h2>

        <ul className="w-full text-start pl-8 text-sm font-medium font-poppins space-y-6">
          {isLoggedIn ? (
            isAdmin ? (
              <>
                <li>
                  <Link
                    to="/register"
                    className={`${
                      selected === "Registrar comercio"
                        ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
                        : "text-titles-menu"
                    } px-4 py-2 rounded-full w-auto text-left`}
                    onClick={() => handleSelect("Registrar comercio")}
                  >
                    Registrar comercio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create"
                    className={`${
                      selected === "Crear oferta"
                        ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
                        : "text-titles-menu"
                    } px-4 py-2 rounded-full w-auto text-left`}
                    onClick={() => handleSelect("Crear oferta")}
                  >
                    Crear oferta
                  </Link>
                </li>
                <li>
                  <Link
                    to="/businesses"
                    className={`${
                      selected === "Comercios"
                        ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4"
                        : "text-titles-menu"
                    } px-4 py-2 rounded-full w-auto text-left`}
                    onClick={() => handleSelect("Comercios")}
                  >
                    Comercios
                  </Link>
                </li>
              </>
            ) : (
              <>
                {[
                  "Carnes rojas",
                  "Carnes blancas",
                  "Bebidas c/alcohol",
                  "Bebidas s/alcohol",
                ].map((item) => (
                  <li key={item}>{renderButton(item)}</li>
                ))}
              </>
            )
          ) : (
            <>
              {[
                "Carnes rojas",
                "Carnes blancas",
                "Bebidas c/alcohol",
                "Bebidas s/alcohol",
              ].map((item) => (
                <li key={item}>{renderButton(item)}</li>
              ))}
            </>
          )}

          {/* Botones de Log In y Register - Pantalla Mobile */}
          <li className="sm:hidden mr-6">
            {isLoggedIn ? (
              <Button onClick={logout} variant="primary">
                Log Out
              </Button>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link to="/login">
                  <Button variant="primary">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary">Register</Button>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default DropdownMenu;
