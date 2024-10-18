const NavLink = ({ text, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="text-gray-800 py-2 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
    >
      {text}
    </li>
  );
};

export default NavLink;
