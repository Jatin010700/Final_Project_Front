import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NumberPages = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideLeft = () => {
    if (slideIndex > 0) {
      setSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSlideRight = () => {
    if (slideIndex < pages.length - 3) {
      setSlideIndex((prevIndex) => prevIndex + 1);
    }
  };

  const pages = [
    { to: "/carlist", label: "1" },
    { to: "/carlist1", label: "2" },
    { to: "/soon", label: "3" },
    { to: "/soon", label: "4" },
    { to: "/soon", label: "5" },
  ];

  const visiblePages = pages.slice(slideIndex, slideIndex + 3);

  return (
    <div className="bg-white">
      <div className="flex justify-center gap-2 p-4">
        <div
          className={`bg-B-yellow rounded-full w-11 text-center active:transform active:-translate-y-1 transition ease-in-out hover:scale-110 duration-150 cursor-pointer ${
            slideIndex > 0 ? "cursor-pointer" : ""
          }`}
          onClick={handleSlideLeft}
        >
          <i className="text-L-black relative top-2 text-xl bi bi-caret-left-fill"></i>
        </div>
        {visiblePages.map((page, index) => (
          <Link
            key={index}
            to={page.to}
            className="border-2 border-B-yellow p-2 w-11 text-center rounded-full hover:bg-L-black hover:text-B-yellow font-bold transition ease-in-out hover:scale-110 duration-150"
          >
            {page.label}
          </Link>
        ))}
        <div
          className={`bg-B-yellow rounded-full w-11 text-center  active:transform active:-translate-y-1 transition ease-in-out hover:scale-110 duration-150 ${
            slideIndex < pages.length - 3 ? "cursor-pointer" : ""
          }`}
          onClick={handleSlideRight}
        >
          <i className="text-L-black relative top-2 text-xl bi bi-caret-right-fill"></i>
        </div>
      </div>
    </div>
  );
};
