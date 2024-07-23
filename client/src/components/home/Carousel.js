import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((c) => (c + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const slides = ["https://marketplace.canva.com/EAF-nCuAoHE/1/0/1600w/canva-brown-%26-white-simple-fashion-sale-banner-%28landscape%29-pwGmiOFprH0.jpg", "https://i.pinimg.com/736x/ca/00/f0/ca00f0a1335b8aa4b074ef35c401196c.jpg", "https://img.freepik.com/premium-psd/landscape-social-media-banner-fashion-sale-psd-tempplate_115083-456.jpg"];

  return (
    <div className="relative p-2 h-[42rem] mt-10 mb-20 flex justify-center">
      <img className=" w-full" src={slides[currentSlide]}  />
    </div>
  );
};

export default Carousel;
