import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "src/contexts/CartContext";
import { ProductContext } from "src/contexts/ProductContext";
import { ProductInterface } from "src/types/types";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item: ProductInterface) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className="flex h-screen items-center justify-center">Loading...</section>;
  }

  const { title, price, description, image } = product;

  return (
    <section className="flex h-screen items-center pt-32 pb-12 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-8 flex flex-1 items-center justify-center lg:mb-0">
            <img className="max-w-[12.5rem] lg:max-w-sm" src={image} alt="Product" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mx-auto mb-2 max-w-[28.125rem] text-[1.625rem] font-medium lg:mx-0">{title}</h1>
            <p className="mb-6 text-xl font-medium text-red-500">$ {price}</p>
            <p className="mb-8" >{description}</p>
            <button onClick={() => addToCart(product, product.id)} className="bg-primary text-white py-4 px-8" >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
