import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../../../components/buttons/Button";
import { Link } from "react-router-dom";

const RegisterBusiness = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    hours: "",
    address: "",
    logo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div className="flex md:items-center justify-center md:min-h-screen bg-custom-gradient p-4 font-poppins">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-titles mb-2">Comercio</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-100 shadow-sm"
              placeholder="Carnicería ejemplo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-titles mb-2">Horarios</label>
            <input
              type="text"
              name="hours"
              value={formData.hours}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-100 shadow-sm"
              placeholder="09:00 a 19hs"
            />
          </div>
          <div className="mb-4">
            <label className="block text-titles mb-2">Dirección</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-100 shadow-sm"
              placeholder="Dirección del comercio"
            />
          </div>
          <div className="mb-6">
            <label className="block text-titles mb-2">
              Logo o imagen del comercio
            </label>
            <div className="flex items-center justify-center w-full border-2 border-dashed rounded-3xl h-32 bg-gray-50 relative">
              <input
                type="file"
                onChange={handleFileChange}
                className="opacity-0 absolute w-full h-full cursor-pointer"
              />
              <div className="flex flex-col items-center">
                <FiUploadCloud className="text-primary-100 hover:text-primary-300 text-4xl" />
                <p className="text-placeholder mt-1">Buscar archivos</p>
              </div>
            </div>
          </div>

          <Button variant="secondary" type="submit">
            Registrar comercio
          </Button>
        </form>
        <div className="mt-4 text-start">
          <p className="text-titles">
            ¿Ya tenés cuenta?,
            <Link to="/login" className="text-menu-color hover:underline ml-1">
              Ingresá
            </Link>
          </p>
          <p className="mt-2">
            <Link to="/" className="text-titles hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;
