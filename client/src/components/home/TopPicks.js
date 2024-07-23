import React from "react";
import ButtonCarousel from "../common/ButtonCarousel";

const TopPicks = () => {
  return (
    <div className="mt-10 mb-20">
      <span className="block text-2xl font-semibold mb-6">Top Picks for You</span>
      <div className="overflow-hidden">
        <ButtonCarousel />
      </div>
    </div>
  );
};

export default TopPicks;
