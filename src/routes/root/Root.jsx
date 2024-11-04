import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom-gradient">
      <Navbar />

      <div className="flex-grow mt-[9rem]">
        <Outlet />
      </div>

      <Footer />

      <ScrollRestoration />
    </div>
  );
};

export default Root;
