import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types";

const SchedulesAccordion = ({ schedules }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b font-poppins mx-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full py-4"
      >
        <span className="text-[16px] font-semibold text-titles">Horarios</span>
        {isOpen ? (
          <IoIosArrowUp size={24} className="text-primary-200" />
        ) : (
          <IoIosArrowDown size={24} className="text-primary-200" />
        )}
      </button>
      {isOpen && (
        <div className="py-2 text-gray-600">
          <ul>
            {schedules.map((schedule, index) => {
              const [day, ...hours] = schedule.split(" ");
              const isClosed = hours.join(" ") === "Cerrado";

              return (
                <li key={index} className="flex justify-between py-1">
                  {/* Día */}
                  <span
                    className={`text-gray-700 ${
                      isClosed ? "text-red-500 font-normal" : ""
                    }`}
                  >
                    {day}
                  </span>

                  {/* Hora o Cerrado */}
                  <span
                    className={`text-gray-700 ${
                      isClosed ? "text-red-500 font-normal" : ""
                    }`}
                  >
                    {hours.join(" ")} {/* Unir nuevamente las horas */}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

SchedulesAccordion.propTypes = {
  schedules: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SchedulesAccordion;
