import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCart from "../common/ProductCart";

const Products = () => {
  const { param } = useParams();
  const [data, setData] = useState(null);
  const queryParams = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(searchParams.entries());
  }, [window.location.search]);
  const type = queryParams.type;
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.REACT_APP_API_URL
          }/products/${param}?${new URLSearchParams(queryParams)}`
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [param, queryParams]);
  return (
    <div className="m-2 p-5 w-full">
      <h1 className=" font-bold text-2xl">{`${param}'s ${type}`}</h1>
      {data?.length === 0 ? (
        <div>
          <p className="text-center m-2 p-5 text-red-700 text-xl">
            {" "}
            No product found!
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap">
        {data?.map((product) => (
          <div key={product._id}>
            <ProductCart
              img={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              id={product._id}
            />
          </div>
        ))}
        </div>
      )}
    </div>
  );
};

export default Products;
