import PropTypes from "prop-types";
//import { IoStar, IoChatbox } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ shop }) => {
  const {
    id,
    nameShops,
    category,
    product,
    images,
    price,
    discount,
    description,
  } = shop;

  const discountedPrice = (price * (1 - parseFloat(discount) / 100)).toFixed(3);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 min-w-[280px] max-w-xs pb-10 relative">
      {/* Información de la tienda */}
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 rounded-full bg-primary-100 text-white flex items-center justify-center text-lg font-semibold">
          {nameShops.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="text-[16px] text-titles font-bold font-poppins">
            {nameShops}
          </h3>
          <p className="text-sm font-normal text-gray-500 font-poppins">
            {category}
          </p>
        </div>
      </div>

      {/* Imagen del producto con link al detalle */}
      <Link to={`/product/${id}`}>
        <img
          src={images[0]}
          alt={product}
          className="w-full h-44 object-cover mb-3 cursor-pointer hover:opacity-90"
        />
      </Link>

      {/* Información del producto, rating y comentarios */}
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-[16px] text-titles">{product}</h4>
        {/* <div className="flex items-center space-x-1">
          <span className="text-yellow-500 flex items-center">
            {star} <IoStar size={16} />
          </span>
          <span className="text-gray-500 flex items-center">
            8 <IoChatbox size={16} />
          </span>
        </div> */}
      </div>

      {/* Descripción del producto */}
      <p className="text-gray-500 text-sm mb-8 line-clamp-9 font-poppins">
        {description}
      </p>

      {/* Precio y descuento */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center font-poppins p-0 pb-0">
        <div className="bg-primary-100 text-white p-1 px-3 rounded-lg text-xl font-bold">
          ${discountedPrice}
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-discount-color font-bold">{discount}% OFF</span>
          <span className="line-through text-sm font-semibold text-placeholder">
            ${price.toFixed(2)}0
          </span>
        </div>
      </div>
    </div>
  );
};

// Validación de PropTypes
Card.propTypes = {
  shop: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nameShops: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    //star: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
