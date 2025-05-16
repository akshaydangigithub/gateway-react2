import React, { useContext, useState } from "react";
import { DataContext } from "../ContextApi";

const AddProducts = () => {
  const {
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
  } = useContext(DataContext);

  function handleAddProduct(e) {
    e.preventDefault();

    if (name == "") return alert("Please enter Name");
    if (price == "") return alert("Please enter Price");
    if (image == "") return alert("Please enter Image");
    if (desc == "") return alert("Please enter Description");

    let newProduct = {
      name,
      image,
      price,
      desc,
    };

    setProducts([...products, newProduct]);

    setName("");
    setImage("");
    setPrice("");
    setDesc("");
  }

  function handleUpdateProduct(e) {
    e.preventDefault();

    if (name == "") return alert("Please enter Name");
    if (price == "") return alert("Please enter Price");
    if (image == "") return alert("Please enter Image");
    if (desc == "") return alert("Please enter Description");

    let activeProduct = products[activeIndex];

    activeProduct.name = name;
    activeProduct.price = price;
    activeProduct.image = image;
    activeProduct.desc = desc;

    setName("");
    setImage("");
    setPrice("");
    setDesc("");
    setActiveIndex(null);
  }

  return (
    <form className="w-2/3 mt-4 bg-gray-100 p-5">
      <input
        className="w-full border-2 p-2.5 border-gray-400 rounded-xl outline-none"
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full border-2 p-2.5 mt-3 border-gray-400 rounded-xl outline-none"
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        className="w-full border-2 p-2.5 mt-3 border-gray-400 rounded-xl outline-none"
        type="text"
        placeholder="Product image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        className="w-full border-2 p-2.5 mt-3 border-gray-400 rounded-xl outline-none"
        name=""
        id=""
        placeholder="Product Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      {activeIndex === null ? (
        <button
          type="submit"
          onClick={handleAddProduct}
          className="w-full bg-black text-white mt-3 rounded-xl py-2.5 cursor-pointer"
        >
          Add Product
        </button>
      ) : (
        <button
          type="submit"
          onClick={handleUpdateProduct}
          className="w-full bg-black text-white mt-3 rounded-xl py-2.5 cursor-pointer"
        >
          Update Product
        </button>
      )}
    </form>
  );
};

export default AddProducts;
