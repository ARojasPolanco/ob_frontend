import PropTypes from "prop-types";

import { useState } from "react";
import { Link } from "react-router-dom";

const DetailInformation = ({ description, imageMap, address }) => {
  const [openTab, setOpenTab] = useState("map");

  const toggleTab = (tab) => {
    setOpenTab(tab);
  };

  return (
    <div className="mt-4 mb-4 font-poppins">
      <p className="text-gray-700">{description}</p>
      {/* Acordeón */}
      <div className="mt-4">
        <div className="flex justify-between">
          <button
            className={`w-1/2 text-center p-2 text-gray-700 ${
              openTab === "map"
                ? "border-4 border-b-primary-200 font-bold"
                : "bg-white"
            } hover:bg-gray-300`}
            onClick={() => toggleTab("map")}
          >
            Información
          </button>
          <button
            className={`w-1/2 text-center p-2 text-gray-700 ${
              openTab === "reviews"
                ? "border-4 border-b-primary-200 font-bold"
                : "bg-white"
            } hover:bg-gray-300`}
            onClick={() => toggleTab("reviews")}
          >
            Opiniones
          </button>
        </div>

        {openTab === "map" && (
          <div className="rounded-md">
            <img src={imageMap} alt="Mapa" className="w-full h-auto" />
            <p className="p-2 text-gray-700 font-semibold">{address}</p>
            <Link to={"https://maps.app.goo.gl/TUUXuVhhiiXBrxr18"}>
              <p className="flex justify-center text-[10px] font-medium underline mb-2">
                Abrir mapa
              </p>
            </Link>
          </div>
        )}

        {openTab === "reviews" && (
          <div className="p-2 rounded-md mt-2">
            <h4 className="font-bold">Opiniones:</h4>
            <p>Aquí puedes incluir opiniones de los clientes.</p>
          </div>
        )}
      </div>
    </div>
  );
};

DetailInformation.propTypes = {
  description: PropTypes.string.isRequired,
  imageMap: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default DetailInformation;
