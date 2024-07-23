import React, { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("token")
        const body = {
          value: token
      }
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart/get`, body);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );
  const handleClick = async () => {
    alert("Order Placed");
  }
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {products.length === 0 ? (
          <p className="p-4 text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center border-b border-gray-200 p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex justify-between w-full">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-500">INR {product.price}</p>
                </div>
              </div>
            ))}
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-600"
                onClick={handleClick}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
