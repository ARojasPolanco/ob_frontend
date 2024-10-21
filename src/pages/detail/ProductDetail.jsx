import { Link, useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import DetailPrice from "./DetailPrice";
import DetailInformation from "./DetailInformation";
import productsData from "../../assets/data/shops.json";
import SchedulesAccordion from "./SchedulesAccordion";
import PaymentsAccordion from "./PaymentsAccordion";
import ContactAccordion from "./ContactAccordion";

import { IoIosArrowBack } from "react-icons/io";

const ProductDetail = () => {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <div className="ml-8 mt-[-50px]">
        <Link to="/">
          <IoIosArrowBack
            size={26}
            className="text-primary-300 hover:text-primary-100"
          />
        </Link>
      </div>
      <div className="p-4 bg-white m-4">
        {/* Componente DetailHeader */}
        <DetailHeader
          nameShops={product.nameShops}
          category={product.category}
          product={product.product}
          image={product.images[0]}
        />

        {/* Componente DetailPrice */}
        <DetailPrice
          price={product.price}
          discount={product.discount}
          star={product.star}
        />

        {/* Componente DetailInformation */}
        <DetailInformation
          description={product.description}
          imageMap={product.imageMap}
          address={product.address}
        />

        {/* Acordeones */}
        <div className="mt-4">
          {/* Horarios */}
          <SchedulesAccordion schedules={product.schedules} />

          {/* Medios de Pago */}
          <PaymentsAccordion payments={product.payments} />

          {/* Contactos */}
          <ContactAccordion contact={product.contact} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
