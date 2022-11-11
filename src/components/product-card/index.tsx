import { CardProps } from "@yext/search-ui-react";
import Product from "../../types/products";
import "./index.css";

const ProductCard = ({ result }: CardProps<Product>): JSX.Element => {
  const product = result.rawData;
  const productImage = product.primaryPhoto?.image.url;
  return (
    <div className="card-container">
      {productImage && (
        <img
          alt="beverage photo"
          className="card-image"
          src={productImage}
        ></img>
      )}
      <div className="card-content">
        <div className="product-title">{product.name}</div>
        <div>{product.c_shortDescription}</div>
      </div>
    </div>
  );
};

export default ProductCard;
