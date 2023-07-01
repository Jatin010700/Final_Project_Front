import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../User_Action/action";

export const NavBar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-white p-2 w-full sticky top-0 z-50 shadow">
      <h1 className="font-bold p-2 text-2xl">
        <span className="text-B-yellow text-4xl">Car</span>{" "}
        <i className="text-4xl bi bi-car-front-fill"></i> Rental
      </h1>
      <nav className="hidden md:flex md:items-center justify-center flex-wrap gap-2">
        {/* Navigation links */}
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
      <div className="flex justify-center items-center md:hidden">
        <button
          className="p-2 rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
          onClick={toggleMobileNav}
        >
          <i className="bi bi-list text-2xl"></i>
        </button>
        <div
          className={`absolute top-16 right-0 mt-3 mr-8 w-80 bg-white p-3 shadow-lg rounded-2xl transition duration-300 ease-in-out transform ${
            showMobileNav ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <ul className="flex flex-col items-center gap-3">
            <li>
              <Link
                to="/"
                className="p-2 text-L-black transition ease-in-out hover:-translate-z-1 hover:scale-125"
              >
                <span className="underline decoration-B-yellow">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/soon"
                className="p-2 text-L-black transition ease-in-out hover:-translate-z-1 hover:scale-125"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/soon"
                className="p-2 text-L-black transition ease-in-out hover:-translate-z-1 hover:scale-125"
              >
                Review
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="p-2 text-L-black transition ease-in-out hover:-translate-z-1 hover:scale-125"
              >
                Contact
              </Link>
            </li>
            <div className="flex gap-2">
              {userLogin ? (
                <li>
                  <button
                    className="p-2 px-4 w-28 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                    onClick={handleLogout}
                  >
                    LOG OUT
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="p-2 px-4 w-28 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                    >
                      LOG IN
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="p-2 px-4 w-28 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                    >
                      SIGN UP
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
