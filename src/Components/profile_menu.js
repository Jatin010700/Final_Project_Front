import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = useSelector((state) => state.username);

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
        <div className="fixed top-0 right-0 mr-2 mt-20 p-4 rounded-2xl h-5/6 w-64 bg-white transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-2xl">Account</h1>
            <h1>Welcome, {username}!</h1>
            <button className="p-2 px-5 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150">
              View Profile
            </button>
            <ul className="flex flex-col items-center gap-2">
              <li className="hover:underline hover:decoration-B-yellow">Help</li>
              <li className="hover:underline hover:decoration-B-yellow">Manage</li>

              <li className="hover:underline hover:decoration-B-yellow">Language</li>

              <li className="hover:underline hover:decoration-B-yellow">Posts & Activity</li>
              <li className="hover:underline hover:decoration-B-yellow">Settings & Privacy</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
