import { Link, useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import DetailPrice from "./DetailPrice";
import DetailInformation from "./DetailInformation";
import productsData from "../../assets/data/shops.json";
import SchedulesAccordion from "./SchedulesAccordion";
import PaymentsAccordion from "./PaymentsAccordion";
import ContactAccordion from "./ContactAccordion";
import { IoIosArrowBack } from "react-icons/io";
import Banner from "../home/Banner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <Banner />
      <div className="ml-8 mt-9">
        <Link to="/">
          <IoIosArrowBack
            size={26}
            className="text-primary-300 hover:text-primary-100"
          />
        </Link>
      </div>

      <div className="p-4 bg-white mx-4 mb-4 mt-9 md:grid md:grid-cols-2 md:gap-8">
        {/* Columna Izquierda */}
        <div className="space-y-4 mx-4 md:mx-10">
          {/* Encabezado y precio */}
          <DetailHeader
            nameShops={product.nameShops}
            category={product.category}
            product={product.product}
            image={product.images[0]}
          />
          <DetailPrice
            description={product.description}
            price={product.price}
            discount={product.discount}
            star={product.star}
          />
        </div>

        {/* Columna Derecha */}
        <div className="space-y-4 mt-4 mx-4 md:mx-10 md:mt-[-18px]">
          <DetailInformation
            description={product.description}
            imageMap={product.imageMap}
            address={product.address}
          />

          {/* Acordeones - Horarios, Pagos, Contacto */}
          <div className="md:shadow-lg md:rounded-b-lg">
            <SchedulesAccordion schedules={product.schedules} />
          </div>

          <div className="md:shadow-lg md:rounded-b-lg">
            <PaymentsAccordion payments={product.payments} />
          </div>

          <div className="md:shadow-lg md:rounded-b-lg">
            <ContactAccordion contact={product.contact} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
