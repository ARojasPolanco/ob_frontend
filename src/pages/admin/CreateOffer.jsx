import { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Button from "../../components/buttons/Button";
import PropTypes from "prop-types";

const CreateOffer = ({ offerData, onClose }) => {
  const [formData, setFormData] = useState({
    product: "",
    detail: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    if (offerData) {
      setFormData({
        product: offerData.product || "",
        detail: offerData.detail || "",
        price: offerData.price || "",
        image: null,
      });
    }
  }, [offerData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.product ||
      !formData.detail ||
      !formData.price ||
      !formData.image
    ) {
      alert("Por favor, completa todos los campos");
      return;
    }
    console.log("Datos del formulario:", formData);
    onClose(); // se cierra modal después de enviar
  };

  return (
    <div className="flex md:items-center justify-center mb-20 p-4 font-poppins">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-titles mb-2">Producto</label>
            <input
              type="text"
              name="product"
              value={formData.product}
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
              name="detail"
              value={formData.detail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-primary-100 shadow-sm"
              placeholder="Detalle ejemplo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-titles mb-2">Precio</label>
            <input
              type="text"
              name="price"
              value={formData.price}
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
            {offerData ? "Guardar cambios" : "Crear oferta"}
          </Button>
          <div className="mt-4">
            <Button variant="primary" type="button" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

CreateOffer.propTypes = {
  offerData: PropTypes.shape({
    product: PropTypes.string,
    detail: PropTypes.string,
    price: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default CreateOffer;
