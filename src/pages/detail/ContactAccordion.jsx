import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import PropTypes from "prop-types";

const ContactAccordion = ({ contact }) => {
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
          Contacto
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
            {contact.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

ContactAccordion.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContactAccordion;
