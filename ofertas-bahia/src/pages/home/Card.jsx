import PropTypes from "prop-types";
import { IoStar, IoChatbox } from "react-icons/io5";

const Card = ({ shop }) => {
  const {
    nameShops,
    category,
    product,
    images,
    price,
    star,
    discount,
    description,
  } = shop;
  const discountedPrice = (price * (1 - parseFloat(discount) / 100)).toFixed(3);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 min-w-[280px] max-w-xs pb-6">
      {/* Header: Tienda y categoría */}
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 rounded-full bg-blue-gradient text-white flex items-center justify-center text-lg font-semibold">
          {nameShops.charAt(0)}
        </div>
        <div className="ml-3">
          <h3 className="text-[16px] text-gray-800 font-bold font-poppins">
            {nameShops}
          </h3>
          <p className="text-sm font-normal text-gray-500 font-poppins">
            {category}
          </p>
        </div>
      </div>

      {/* Imagen */}
      <img
        src={images[0]}
        alt={product}
        className="w-full h-44 object-cover mb-3"
      />

      {/* Título del producto, rating y comentarios */}
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-[16px] text-gray-800">{product}</h4>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-500 flex items-center">
            {star} <IoStar size={16} />
          </span>
          <span className="text-gray-500 flex items-center">
            8 <IoChatbox size={16} />
          </span>
        </div>
      </div>

      {/* Descripción del producto */}
      <p className="text-gray-500 text-sm mb-3 line-clamp-2 font-poppins">
        {description}
      </p>

      {/* Precio y descuento */}
      <div className="flex justify-between items-center font-poppins">
        <div className="bg-blue-gradient text-white p-1 px-3 rounded-lg text-xl font-bold">
          ${discountedPrice}
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-orange-500 font-bold">{discount} OFF</span>
          <span className="line-through text-sm font-semibold text-gray-400">
            ${price}00
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  shop: PropTypes.shape({
    nameShops: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    star: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
