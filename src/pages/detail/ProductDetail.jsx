import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import DetailPrice from "./DetailPrice";
import DetailInformation from "./DetailInformation";
import productsData from "../../assets/data/shops.json";

const ProductDetail = () => {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
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
    </div>
  );
};

export default ProductDetail;
