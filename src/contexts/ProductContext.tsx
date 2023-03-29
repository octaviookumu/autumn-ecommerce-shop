import { createContext, useState, useEffect } from "react";
import { ContextProps } from "../types/types";

export const ProductContext = createContext<any>(null);

const ProductProvider: ContextProps = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();

    return () => {
      console.log("clean up");
    };
  }, []);

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
