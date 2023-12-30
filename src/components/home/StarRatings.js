import React from "react";

export default function StarRatings({ ratingWidth }) {
  return (
    <div className="relative overflow-hidden align-middle text-gray-200 text-left">
      <div className="text-[140%]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <div
        className="absolute left-0 top-0 whitespace-nowrap overflow-hidden text-cyan-400 text-[140%] text-left"
        style={{ width: ratingWidth, color: "#F4CE14" }}
      >
        <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      </div>
    </div>
  );
}
