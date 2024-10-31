import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../../components/buttons/Button";

const CreateOffer = () => {
  const [formData, setFormData] = useState({
    product: "",
    detail: "",
    price: "",
    image: null,
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
            <label className="block text-titles mb-2">Producto</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-100 shadow-sm"
              placeholder="Ej: Bola de lomo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-titles mb-2">
              Detalle de la oferta
            </label>
            <input
              type="text"
              name="hours"
              value={formData.hours}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-100 shadow-sm"
              placeholder="Detalle ejemplo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-titles mb-2">Precio</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-100 shadow-sm"
              placeholder="$ Ejemplo"
            />
          </div>
          <div className="mb-6">
            <label className="block text-titles mb-2">
              Imagen del producto
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
            Crear oferta
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateOffer;
