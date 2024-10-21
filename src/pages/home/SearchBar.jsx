import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-6">
      <input
        type="text"
        className="w-full h-12 pl-4 pr-12 rounded-full bg-white shadow-md focus:outline-none text-gray-700 text-sm font-poppins"
        placeholder={placeholder}
        onKeyPress={handleSearch}
      />
      <button
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-primary-100 rounded-full p-1 text-white"
        onClick={() => onSearch(document.querySelector("input").value)}
      >
        <IoSearch size={22} />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: "Ej. Carnes...",
};

export default SearchBar;
