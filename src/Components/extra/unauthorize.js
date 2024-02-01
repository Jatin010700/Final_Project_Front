import React from "react";
import { Link } from "react-router-dom";

export const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <div className="bg-L-black w-screen gap-2 flex justify-center items-center h-28">
        <i className="text-[#ff3333] text-6xl text-center bi bi-person-fill-lock"></i>
        <h1 className="text-B-yellow text-4xl font-bold text-center ">
          You are Unauthorized to Access this Page!!!
        </h1>
      </div>
        <Link to={"/"}
        className=" bg-B-yellow hover:bg-L-black 
        hover:text-B-yellow py-2 px-4 rounded-full 
        font-bold border-2 border-B-yellow hover:border-B-yellow 
        transition ease-in-out hover:scale-110 duration-150
        relative bottom-5">
          Return Home
        </Link>
    </div>
  );
};
