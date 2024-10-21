import PropTypes from "prop-types";

const DetailPrice = ({ price, discount }) => {
  const discountedPrice = (price * (1 - parseFloat(discount) / 100)).toFixed(3);

  return (
    <>
      {/* Precio y descuento */}
      <div className="bottom-4 left-4 right-4 flex justify-between items-center font-poppins">
        <div className="bg-primary-100 text-white p-1 px-3 rounded-lg text-xl font-bold">
          ${discountedPrice}
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-orange-500 font-bold">{discount}% OFF</span>
          <span className="line-through text-sm font-semibold text-gray-400">
            ${price.toFixed(2)}0
          </span>
        </div>
      </div>
    </>
  );
};

DetailPrice.propTypes = {
  price: PropTypes.number.isRequired,
  discount: PropTypes.string,
  star: PropTypes.number,
};

export default DetailPrice;
