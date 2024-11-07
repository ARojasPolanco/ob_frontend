import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const DetailInformation = ({ imageMap, address }) => {
  const [openTab, setOpenTab] = useState("map");

  const toggleTab = (tab) => {
    setOpenTab(tab);
  };

  return (
    <div className="mt-4 mb-4 font-poppins">
      {/* Acordeón */}
      <div className="mt-4">
        <div className="flex justify-between">
          <button
            className={`w-full sm:w-1/2 text-center p-2 text-titles bg-white hover:bg-gray-100 hover:rounded-t-2xl`}
            onClick={() => toggleTab("map")}
          >
            <span
              className={`${
                openTab === "map"
                  ? "border-b-2 border-primary-200 font-bold"
                  : ""
              }`}
            >
              Información
            </span>
          </button>
          <button
            className={`w-full sm:w-1/2 text-center p-2 text-titles bg-white hover:bg-gray-100 hover:rounded-t-2xl`}
            onClick={() => toggleTab("reviews")}
          >
            <span
              className={`${
                openTab === "reviews"
                  ? "border-b-2 border-primary-200 font-bold"
                  : ""
              }`}
            >
              Opiniones
            </span>
          </button>
        </div>

        {openTab === "map" && (
          <div className="rounded-md text-titles">
            <img
              src={imageMap}
              alt="Mapa"
              className="w-full h-24 sm:h-32 md:h-40 lg:h-96 object-cover"
            />
            <p className="p-2 text-gray-700 font-semibold text-xs sm:text-sm">
              {address}
            </p>
            <Link to={"https://maps.app.goo.gl/TUUXuVhhiiXBrxr18"}>
              <p className="flex justify-center text-[10px] sm:text-xs font-medium underline mb-2">
                Abrir mapa
              </p>
            </Link>
          </div>
        )}

        {openTab === "reviews" && (
          <div className="p-2 rounded-md mt-2 text-xs sm:text-sm text-titles">
            <h4 className="font-bold">Opiniones:</h4>
            <p>Aquí puedes incluir opiniones de los clientes.</p>
          </div>
        )}
      </div>
    </div>
  );
};

DetailInformation.propTypes = {
  imageMap: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default DetailInformation;
