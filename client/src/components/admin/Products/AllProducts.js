import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/addproduct");
  }

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/getproducts?page=${page}&limit=${pageSize}`
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [page, pageSize]);

  const handleRemove = async (productId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/admin/deleteproduct/${productId}`
      );
      fetchProducts();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="my-5 p-5">
      <div className="flex justify-between m-2 p-2">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ADD Product</button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products?.map((product) => (
            <tr key={product?._id}>
              <td className="px-6 py-4 whitespace-nowrap">{product?._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product?.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product?.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product?.rating}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleRemove(product?._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={handlePrevPage}
          className={
            page === 1
              ? "bg-blue-100 text-white font-bold py-2 px-4 rounded"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
        >
          Prev
        </button>
        <button
          disabled={products?.length < 20}
          onClick={handleNextPage}
          className={
            products?.length < 20
              ? "bg-blue-100 text-white font-bold py-2 px-4 rounded"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
