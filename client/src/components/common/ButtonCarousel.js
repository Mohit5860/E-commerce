import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const ButtonCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/products/get`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  const nextSlides = () => {
    if (currentSlide + visibleSlides < data?.length) {
      setCurrentSlide((prevSlide) => prevSlide + visibleSlides);
    }
  };

  const prevSlides = () => {
    if (currentSlide - visibleSlides >= 0) {
      setCurrentSlide((prevSlide) => prevSlide - visibleSlides);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={prevSlides}
        disabled={currentSlide === 0}
        className={`text-7xl p-2 ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        &#60;
      </button>
      <div className="flex overflow-hidden w-full mx-4">
        {data &&
          data.slice(currentSlide, currentSlide + visibleSlides).map((product) => (
            <div className="flex-shrink-0 w-1/5 p-2" key={product._id}>
              <ProductCart
                img={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
      </div>
      {currentSlide + visibleSlides >= data?.length ? (
        <button className="text-2xl p-2">
          Show More
        </button>
      ) : (
        <button
          onClick={nextSlides}
          className={`text-7xl p-2 ${currentSlide + visibleSlides >= data?.length ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          &#x3E;
        </button>
      )}
    </div>
  );
};

export default ButtonCarousel;
