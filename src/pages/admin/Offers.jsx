import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopsData from "../../assets/data/shops.json";
import CreateOffer from "./CreateOffer";
import { MdOutlineEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import Modal from "../../components/Modal";
import PropTypes from "prop-types";
import Button from "../../components/buttons/Button";

const Offers = () => {
  const { businessId } = useParams();
  const [shops, setShops] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);

  useEffect(() => {
    setShops(shopsData);
  }, []);

  const filteredOffers = shops.filter((shop) => shop.id === businessId);

  const handleEditClick = (offer) => {
    setSelectedOffer(offer);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (offer) => {
    setSelectedOffer(offer);
    setConfirmAction("delete");
    setIsConfirmModalOpen(true);
  };

  const handleConfirmClose = () => {
    setIsConfirmModalOpen(false);
    setSelectedOffer(null);
    setConfirmAction(null);
  };

  const handleSaveChanges = () => {
    setConfirmAction("save");
    setIsConfirmModalOpen(true);
  };

  const handleConfirmAction = () => {
    if (confirmAction === "delete") {
      // lógica para eliminar la oferta
      console.log("Oferta eliminada:", selectedOffer);
    } else if (confirmAction === "save") {
      // lógica para guardar cambios de la oferta
      console.log("Cambios guardados para la oferta:", selectedOffer);
    }
    handleConfirmClose();
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <div className="flex flex-col bg-white md:p-10 mx-2 md:mx-40 mb-10 md:mb-20 md:mt-32 shadow-md rounded-lg font-poppins">
      {filteredOffers.length === 0 ? (
        <h1 className="flex justify-center mb-4 text-lg text-titles font-medium">
          No hay ofertas disponibles para este negocio.
        </h1>
      ) : (
        filteredOffers.map((shop) => (
          <div key={shop.id} className="mb-6">
            <h1 className="flex justify-center mb-4 text-lg text-titles font-medium uppercase">
              {shop.nameShops}
            </h1>
            <div className="grid grid-cols-6 gap-4 mb-10 mt-16 text-titles font-light">
              <div className="text-center font-semibold">Imagen</div>
              <div className="text-center font-semibold">Producto</div>
              <div className="text-center font-semibold">Descripción</div>
              <div className="text-center font-semibold">Precio</div>
              <div className="text-center font-semibold">Descuento</div>
            </div>
            <div className="grid grid-cols-6 gap-4 py-2 text-titles">
              <div className="flex flex-col items-center">
                <img
                  src={shop.images[0]}
                  alt={shop.product}
                  className="w-32 h-16 object-cover rounded-full"
                />
              </div>
              <div className="text-center">{shop.product}</div>
              <div className="text-center">{shop.description}</div>
              <div className="text-center">${shop.price}00</div>
              <div className="text-center">{shop.discount}% off</div>
              <div className="flex justify-center space-x-8">
                <MdOutlineEdit
                  onClick={() => handleEditClick(shop)}
                  size={30}
                  className="text-white bg-blue-gradient hover:text-primary-300 rounded-full p-1 cursor-pointer"
                />
                <TiDeleteOutline
                  onClick={() => handleDeleteClick(shop)}
                  size={30}
                  className="text-white bg-blue-gradient hover:text-primary-300 rounded-full p-1 cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))
      )}

      {/* Modal de confirmación */}

      {isConfirmModalOpen && (
        <Modal isOpen={isConfirmModalOpen} onClose={handleConfirmClose}>
          <p className="text-lg text-center mb-4 py-10 text-titles">
            {confirmAction === "delete"
              ? "¿Estás seguro de que queres eliminar esta publicación?"
              : "¿Estás seguro de que deseas guardar estos cambios?"}
          </p>
          <Button variant="secondary" onClick={handleConfirmAction}>
            Eliminar
          </Button>
        </Modal>
      )}

      {/* Modal de edición */}
      {isEditModalOpen && (
        <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
          <CreateOffer
            offerData={selectedOffer}
            onClose={handleCloseEditModal}
            onSave={handleSaveChanges}
          />
        </Modal>
      )}
    </div>
  );
};

Offers.propTypes = {
  businessId: PropTypes.string,
};

export default Offers;
