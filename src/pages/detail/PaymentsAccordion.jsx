import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";
import { IoCashOutline } from "react-icons/io5";

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
              <li key={index}>{payment}</li>
            ))}
            <div className="flex justify-start mt-4">
              <FaCreditCard size={24} className="m-2 text-slate-500" />
              <SiMercadopago size={26} className="m-2 text-blue-700" />
              <IoCashOutline size={24} className="m-2 text-green-600" />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

PaymentsAccordion.propTypes = {
  payments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PaymentsAccordion;
