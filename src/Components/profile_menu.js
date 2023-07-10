import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../User_Action/action";

export const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
        <div className="fixed top-0 right-0 mr-2 mt-20 p-4 rounded-2xl h-2/5 w-64 bg-white border-2 border-r-L-black transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-bold text-4xl">Account</h1>
            <h1 className="text-center">"Should display username!"</h1>
            <div className="h-0.5 w-full rounded-full bg-L-black/75 " />
            <ul className="flex flex-col gap-2 w-full items-center">
              <li className=" rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">
                Settings
              </li>
              <li className="rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125">
                Billing
              </li>
              <button
                className="py-2 px-14 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
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
