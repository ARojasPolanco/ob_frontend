import shops from "../../assets/data/shops.json";
import Card from "./Card";

const FeaturedOffers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <h1 className="flex justify-center text-[16px] font-poppins font-semibold text-gray-800 mb-4 mt-6">
        Ofertas destacadas
      </h1>
      <div className="flex space-x-6 overflow-x-auto pb-4 scroll-container">
        {shops.map((shop) => (
          <Card key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedOffers;
