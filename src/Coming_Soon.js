import React from "react";
import { NavBar } from "./Components/navbar";

export const Soon = () => {
  return (
    <>
    <NavBar/>
      <div className="flex flex-col justify center bg-white  p-40 ">
        <h1 className="text-L-black text-4xl font-bold text-center ">
          Coming Soon <span className="text-B-yellow"> ...</span>
        </h1>
      </div>
      <div className="bg-white h-52">
       
      </div>
    </>
  );
};
