import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import { ProductInterface } from "../types/types";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log("products", products);

  const genderedProducts = products.filter(
    (item: ProductInterface) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  console.log("genderedProducts", genderedProducts);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[1.875rem] mx-auto">
            {genderedProducts.map((product: ProductInterface) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
