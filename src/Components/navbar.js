import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../User_Action/action";

export const NavBar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-white p-2 w-full sticky top-0 z-50 shadow ">
      <h1 className="font-bold p-2 text-2xl">
        <span className="text-B-yellow text-4xl">Car</span>{" "}
        <i className="text-4xl bi bi-car-front-fill"></i> Rental
      </h1>
      <nav className="flex md:items-center justify-center flex-wrap gap-2">
        <Link
          to="/"
          className="p-2 rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
        >
          <span className="underline decoration-B-yellow">Home</span>
        </Link>
        <Link
          to="/soon"
          className="p-2 rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
        >
          About
        </Link>
        <Link
          to="/soon"
          className="p-2 rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
        >
          Review
        </Link>
        <Link
          to="/contact"
          className="p-2 rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
        >
          Contact
        </Link>

        {userLogin ? (
          <button
            className="p-2 px-4 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
            onClick={handleLogout}
          >
            LOG OUT
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="p-2 px-4 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
            >
              LOG IN
            </Link>
            <Link
              to="/register"
              className="p-2 px-4 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
            >
              SIGN UP
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
