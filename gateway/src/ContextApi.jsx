import React, { createContext, useState } from "react";
export const DataContext = createContext();

const ContextApi = ({ children }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [cartData, setCartData] = useState([]);

  let contextValue = {
    products,
    setProducts,
    name,
    setName,
    price,
    setPrice,
    image,
    setImage,
    desc,
    setDesc,
    activeIndex,
    setActiveIndex,
    cartData,
    setCartData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default ContextApi;
