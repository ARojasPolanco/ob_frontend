import PropTypes from "prop-types";
import { FiShare2 } from "react-icons/fi";
//import { IoStar, IoChatbox } from "react-icons/io5";
import { Link } from "react-router-dom";

const DetailHeader = ({ nameShops, category, product, image }) => {
  return (
    <div className="flex flex-col font-poppins">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-white flex items-center justify-center text-lg font-semibold">
            {nameShops.charAt(0)}
          </div>
          <div className="ml-3">
            <Link to="/">
              <h3 className="text-[16px] text-gray-800 font-bold font-poppins">
                {nameShops}
              </h3>
            </Link>
            <p className="text-sm font-normal text-gray-500 font-poppins">
              {category}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/">
            <FiShare2
              size={26}
              className="text-primary-300 hover:text-primary-100"
            />
          </Link>
        </div>
      </div>
      <img
        src={image}
        alt={product}
        className="w-96 h-48 object-cover shadow-xl hover:opacity-75"
      />

      <div className="flex justify-between items-center mb-1 mt-4">
        <h4 className="font-bold text-[16px] text-gray-800">{product}</h4>
        {/* <div className="flex items-center space-x-1">
          <span className="text-yellow-500 flex items-center">
            {star} <IoStar size={16} />
          </span>
          <span className="text-gray-500 flex items-center">
            8 <IoChatbox size={16} />
          </span>
        </div> */}
      </div>
    </div>
  );
};

DetailHeader.propTypes = {
  nameShops: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  //star: PropTypes.string.isRequired,
};

export default DetailHeader;
