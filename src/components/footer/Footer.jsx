import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import footerLogo from "../../assets/images/logo-ob1-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-8 flex justify-between items-start">
      <div className="w-1/2 flex flex-col space-y-2 text-sm font-poppins text-titles">
        <p>Contacto:</p>
        <p>LIER</p>
        <p>Políticas de privacidad</p>
        <p>Términos de uso</p>
      </div>

      <div className="w-1/2 md:w-2/3 flex flex-col items-center md:items-start mt-[-50px]">
        {/* Logo */}
        <Link to="/">
          <img
            src={footerLogo}
            alt="Ofertas Bahía Logo"
            className="h-16 md:h-24 object-contain mb-0 mt-12"
          />
        </Link>

        <div className="flex justify-center md:justify-end w-full space-x-3 mt-2 md:mt-[-60px]">
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram
              size={26}
              className="text-white bg-primary-200 p-1 rounded-md md:rounded-xl hover:text-blue-700 md:w-[40px] md:h-[40px] md:p-2 md:size-[40px]"
            />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <FaLinkedinIn
              size={26}
              className="text-white bg-primary-200 p-1 rounded-md md:rounded-xl hover:text-blue-700 md:w-[40px] md:h-[40px] md:p-2 md:size-[40px]"
            />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FaFacebookF
              size={26}
              className="text-white bg-primary-200 p-1 rounded-md md:rounded-xl hover:text-blue-700 md:w-[40px] md:h-[40px] md:p-2 md:size-[40px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
