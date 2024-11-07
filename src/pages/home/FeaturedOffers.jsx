import { Link } from "react-router-dom";
import shops from "../../assets/data/shops.json";
import Card from "./Card";

const FeaturedOffers = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-[16px] font-poppins font-semibold text-titles mb-6 mt-6">
        Ofertas destacadas
      </h1>

      <div className="hidden sm:grid sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:grid-rows-1 md:gap-6 xl:gap-6 md:ml-8 mb-10 custom-grid-gap">
        {shops.slice(0, 5).map((shop) => (
          <Card key={shop.id} shop={shop} className="custom-card" />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="hidden md:block text-center text-[16px] font-poppins font-semibold text-titles mb-12 mt-12 underline"
        >
          Ver más ofertas
        </Link>
      </div>

      {/* Scroll lateral para mobile */}
      <div className="flex space-x-6 overflow-x-auto pb-4 scroll-container sm:hidden">
        {shops.map((shop) => (
          <Card key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedOffers;
