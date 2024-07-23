import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchOrders();
  }, [page]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/getorders?page=${page}&limit=20`
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
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
    <div>
      <h1 className="text-2xl font-bold my-8">Orders</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order?._id}>
              <td className="px-6 py-4 whitespace-nowrap">{order?._id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order?.userId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order?.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={handlePrevPage}
          className={page === 1 ? "bg-blue-100 text-white font-bold py-2 px-4 rounded" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >
          Prev
        </button>
        <button
          disabled={orders.length < 20}
          onClick={handleNextPage}
          className={orders.length < 20 ? "bg-blue-100 text-white font-bold py-2 px-4 rounded"  : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Orders;
