import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import footerLogo from "../../assets/images/logo-ob1-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-4 px-6 flex justify-between items-center">
      {/* Sección de texto e iconos */}
      <div className="flex flex-col space-y-2 text-sm font-poppins">
        <p className="text-sm text-gray-600">Contacto</p>
        <p className="text-sm text-gray-600">LIER</p>
        <p className="text-sm text-gray-600">Políticas de privacidad</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram
              size={26}
              className="bg-blue-gradient text-white p-1 rounded"
            />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <FaLinkedin
              size={26}
              className="bg-blue-gradient text-white p-1 rounded"
            />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter">
            <FaTwitter
              size={26}
              className="bg-blue-gradient text-white p-1 rounded"
            />
          </a>
        </div>
      </div>

      {/* Logo del footer */}
      <div className="flex items-center space-x-1">
        <img src={footerLogo} alt="Ofertas Bahía Logo" className="h-36" />
      </div>
    </footer>
  );
};

export default Footer;
