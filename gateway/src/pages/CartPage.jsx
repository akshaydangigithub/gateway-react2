import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { MdDelete } from "react-icons/md";
import { DataContext } from "../ContextApi";

const CartPage = () => {
  const { cartData, setCartData } = useContext(DataContext);

  function handleRemoveFromCart(idx) {
    let newData = cartData.filter((cart, index) => {
      return idx !== index;
    });

    setCartData(newData);
    alert("Item Removed From Cart");
  }

  return (
    <div>
      <Navbar />
      <hr />
      <div className="p-10">
        <h1 className="font-semibold text-lg">All Cart items</h1>

        <table className="w-full mt-10 border">
          <thead>
            <tr>
              <th className="border p-2.5">S.No.</th>
              <th className="border p-2.5">Image</th>
              <th className="border p-2.5">Name</th>
              <th className="border p-2.5">Price</th>
              <th className="border p-2.5">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData.length > 0 ? (
              cartData.map((data, idx) => (
                <tr key={idx}>
                  <td className="border p-2.5">{idx + 1}.</td>
                  <td className="border p-2.5">
                    <div className="h-10 w-10 rounded-xl overflow-hidden bg-red-200">
                      <img
                        src={data.image}
                        className="h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="border p-2.5">{data.name}</td>
                  <td className="border p-2.5">₹ {data.price}</td>
                  <td className="border p-2.5">
                    <span
                      onClick={() => handleRemoveFromCart(idx)}
                      className="text-xl cursor-pointer text-red-500"
                    >
                      <MdDelete />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-5 text-center" colSpan={5}>
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
