import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import visaIcon from "../../../public/assets/images/visa.png";
import mpIcon from "../../../public/assets/images/mp.png";
import dollarIcon from "../../../public/assets/images/dollar.png";
import PropTypes from "prop-types";

const PaymentsAccordion = ({ payments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b font-poppins">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full py-4"
      >
        <span className="text-[16px] font-semibold text-gray-700">
          Medios de pago
        </span>

        {isOpen ? (
          <IoIosArrowUp size={24} className="text-primary-200" />
        ) : (
          <IoIosArrowDown size={24} className="text-primary-200" />
        )}
      </button>
      {isOpen && (
        <div className="py-2 text-gray-600">
          <ul>
            {payments.map((payment, index) => (
              <li key={index} className="text-gray-700">
                {payment}
              </li>
            ))}
          </ul>

          {/* Íconos de métodos de pago */}
          <div className="flex justify-start mt-1">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md m-2">
              <img
                src={visaIcon}
                alt="visa"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md m-2">
              <img src={mpIcon} alt="mp" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md m-2">
              <img
                src={dollarIcon}
                alt="dollar"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PaymentsAccordion.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PaymentsAccordion;
