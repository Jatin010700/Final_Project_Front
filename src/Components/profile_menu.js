import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="p-2 rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
        onClick={toggleMenu}
      >
        <i className="bi bi-person text-4xl"></i>
      </button>
      {/* Mobile navbar */}
      {isOpen && (
        <div className="fixed top-0 right-0 mr-2 mt-20 p-4 rounded-2xl h-5/6 w-64 bg-white border-2 border-r-L-black transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-4xl">Account</h1>
            <h1>"Should display username!"</h1>
            <Link to="/soon" className="py-2 px-14 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150">
              View Profile
            </Link>
            <ul className="flex flex-col items-center gap-2 w-full bg-L-black p-4 rounded-2xl text-white">
              <li className="rounded-full hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">Help</li>
              <li className="rounded-full hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">Manage</li>
              <li className="rounded-full hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">Language</li>
              <li className="rounded-full  hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">Settings</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
