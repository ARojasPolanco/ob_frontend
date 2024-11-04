import { useEffect, useState } from "react";
import shopsData from "../../assets/data/shops.json";
import { Link } from "react-router-dom";

const Businesses = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    setBusinesses(shopsData);
  }, []);

  const uniqueBusinesses = () => {
    const seen = new Set();
    return businesses.filter((business) => {
      const isDuplicate = seen.has(business.nameShops);
      seen.add(business.nameShops);
      return !isDuplicate;
    });
  };

  return (
    <div className="flex flex-col bg-white md:p-10 mx-2 md:mx-40 mb-10 md:mb-20 md:mt-32 shadow-md rounded-lg font-poppins">
      <h1 className="flex justify-center mb-10 uppercase text-titles mt-6 font-medium">
        Comercios adheridos
      </h1>
      {uniqueBusinesses().map((business) => (
        <div
          key={business.id}
          className="flex items-center justify-between p-4 border-b last:border-b-0"
        >
          <div className="w-12 h-12 rounded-full bg-primary-100 text-white flex items-center justify-center text-lg font-semibold mr-4">
            {business.nameShops.charAt(0)}
          </div>

          <div className="flex flex-col flex-grow">
            <Link to={`/offers/${business.id}`}>
              <h3 className="text-lg text-titles font-light">
                {business.nameShops}
              </h3>
            </Link>
          </div>

          <div className="text-titles">{business.category}</div>
        </div>
      ))}
    </div>
  );
};

export default Businesses;
