import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../User_Action/action";
import { Link } from "react-router-dom";

export const ProfileMenu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const userName = useSelector((state) => state.userName);
  
  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
        onClick={toggleMenu}
      >
        <i className="bi bi-person text-4xl"></i>
      </button>
      {/* Mobile navbar */}
      {isOpen && (
        <div className="fixed top-0 right-0 mr-16 mt-20 p-4 rounded-2xl h-auto w-64 bg-white border-2 border-r-L-black transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-4xl">Account</h1>
            <h1 className="text-center font-bold text-2xl">{userName}</h1>
            
            <div className="h-0.5 w-full rounded-full bg-L-black/75 " />
            
            <ul className="flex flex-col gap-2 w-full items-center">
              <Link to="/carcontent" className="cursor-pointer rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">
                Rent your Car
                </Link>

              <li className="cursor-pointer rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">
                Billing
              </li>
              <div className="h-0.5 w-full rounded-full bg-L-black/75 " />
              <li className="cursor-pointer rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">
                Settings
              </li>
              <button
                className="py-2 px-14 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:scale-110 duration-150"
                onClick={handleLogout}
              >
                <i class="bi bi-arrow-left-circle-fill"></i> LOG OUT
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
