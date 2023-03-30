import React, { useContext } from "react";
import Hero from "src/components/Hero";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import { ProductInterface } from "../types/types";

const Home = () => {
  const { products } = useContext(ProductContext);

  const genderedProducts = products.filter(
    (item: ProductInterface) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mx-auto grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
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
