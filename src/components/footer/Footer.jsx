import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import footerLogo from "../../assets/images/logo-ob1-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-white py-6 px-8 flex justify-between items-start">
      {/* Mitad izquierda: Sección de texto */}
      <div className="w-1/2 flex flex-col space-y-2 text-sm font-poppins text-titles">
        <p>Contacto:</p>
        <p>LIER</p>
        <p>Políticas de privacidad</p>
        <p>Términos de uso</p>
      </div>

      {/* Mitad derecha: Logo grande con íconos de redes sociales */}
      <div className="w-1/2 flex flex-col items-center mt-[-50px]">
        {/* Logo */}
        <img
          src={footerLogo}
          alt="Ofertas Bahía Logo"
          className="h-36 object-contain mb-0"
        />

        {/* Iconos de redes sociales */}
        <div className="flex space-x-3 mt-[-20px]">
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram
              size={26}
              className="text-white bg-blue-gradient p-1 rounded-md hover:text-blue-700"
            />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <FaLinkedinIn
              size={26}
              className="text-white bg-blue-gradient p-1 rounded-md hover:text-blue-700"
            />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FaFacebookF
              size={26}
              className="text-white bg-blue-gradient p-1 rounded-md hover:text-blue-700"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
