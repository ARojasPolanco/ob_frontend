import logo from "../../assets/images/logo-ob1-removebg-preview.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="Ofertas Bahía" className="h-10 md:h-16" />
    </div>
  );
};

export default Logo;
