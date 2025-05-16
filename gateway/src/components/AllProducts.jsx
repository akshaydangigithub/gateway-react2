import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useContext } from "react";
import { DataContext } from "../ContextApi";

const AllProducts = () => {
  const {
    products,
    setProducts,
    setName,
    setPrice,
    setImage,
    setDesc,
    setActiveIndex,
  } = useContext(DataContext);

  function handleDelete(idx) {
    let newProducts = products.filter((pro, index) => {
      return idx !== index;
    });

    alert("Product Delted Successfully");

    setProducts(newProducts);
  }

  function handleEdit(idx) {
    setActiveIndex(idx);
    let activeProduct = products[idx];

    setName(activeProduct.name);
    setImage(activeProduct.image);
    setPrice(activeProduct.price);
    setDesc(activeProduct.desc);
  }

  return (
    <div>
      <table className="w-full mt-5 border">
        <thead>
          <tr>
            <th className="border p-2.5">S.No.</th>
            <th className="border p-2.5">Image</th>
            <th className="border p-2.5">Product Name</th>
            <th className="border p-2.5">Product Price</th>
            <th className="border p-2.5">Product Description</th>
            <th className="border p-2.5">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, idx) => (
              <tr key={idx}>
                <td className="border p-2.5">{idx + 1}.</td>
                <td className="border p-2.5">
                  <div className="h-10 w-10 rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="border p-2.5">{product.name}</td>
                <td className="border p-2.5">{product.price}</td>
                <td className="border p-2.5">{product.desc}</td>
                <td className="border p-2.5">
                  <div className="flex items-center">
                    <span
                      onClick={() => handleDelete(idx)}
                      className="text-xl cursor-pointer text-red-500"
                    >
                      <MdDelete />
                    </span>
                    <span
                      onClick={() => handleEdit(idx)}
                      className="text-xl cursor-pointer text-yellow-700 ml-4"
                    >
                      <CiEdit />
                    </span>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center p-5">
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
