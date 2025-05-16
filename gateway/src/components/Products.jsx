import React, { useContext } from "react";
import { DataContext } from "../ContextApi";

const Products = () => {
  const { products, cartData, setCartData } = useContext(DataContext);

  function handleAddToCart(idx) {
    setCartData([...cartData, products[idx]]);
    alert("Product Added into the Cart");
  }

  return (
    <>
      <div className="px-8">
        <h1 className="font-bold text-2xl text-center">All Product</h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 mt-10 pro_main">
            {products.map((product, idx) => (
              <div key={idx} className="border p-2 rounded-lg relative">
                <h1 className="bg-[#A749FF] text-white w-fit px-2 text-sm rounded-lg absolute top-4 right-4">
                  New
                </h1>
                <img
                  className="h-64 w-full rounded-lg object-conver"
                  src={product.image}
                  alt=""
                />
                <h1 className="text-lg font-semibold mt-3">{product.name}</h1>
                <h2 className="text-xl font-bold mt-1">₹ {product.price}</h2>
                <button
                  onClick={() => handleAddToCart(idx)}
                  className="mt-2 bg-yellow-500 w-full py-2 rounded-xl text-white cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-center font-semibold mt-10 bg-red-200 p-2.5 text-lg">
            No Products Found
          </h1>
        )}
      </div>
    </>
  );
};

export default Products;
