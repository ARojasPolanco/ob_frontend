import PropTypes from "prop-types";

const DetailPrice = ({ description, price, discount }) => {
  const discountedPrice = (price * (1 - parseFloat(discount) / 100)).toFixed(3);

  return (
    <>
      {/* Precio y descuento */}

      <p className="text-titles md:text-lg text-base font-poppins">
        {description}
      </p>

      <div className="bottom-4 left-4 right-4 flex justify-between items-center font-poppins mt-2 sm:mt-4">
        <div className="bg-primary-100 text-white p-1 px-3 rounded-lg text-lg sm:text-xl font-bold">
          ${discountedPrice}
        </div>
        <div className="flex items-center space-x-2 text-xs sm:text-sm">
          <span className="text-discount-color font-bold text-xl">
            {discount}% OFF
          </span>
          <span className="line-through font-semibold text-gray-400 text-xl">
            ${price.toFixed(2)}0
          </span>
        </div>
      </div>
    </>
  );
};

DetailPrice.propTypes = {
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.string,
  star: PropTypes.number,
};

export default DetailPrice;
