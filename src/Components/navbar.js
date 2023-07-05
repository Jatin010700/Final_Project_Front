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

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  const NavButton = ({ to, text }) => (
    <Link
      to={to}
      className="p-2 rounded-full font-bold hover:text-B-yellow transition ease-in-out hover:-translate-z-1 hover:scale-125"
    >
      {text}
    </Link>
  );

  return (
    <div className="flex flex-wrap justify-between items-center bg-white p-2 w-full sticky top-0 z-50 shadow">
      <h1 className="font-bold p-2 text-2xl">
        <span className="text-B-yellow text-4xl">Car</span>{" "}
        <i className="text-4xl bi bi-car-front-fill"></i> Rental
      </h1>
      <nav className="hidden md:flex md:items-center justify-center flex-wrap gap-2">
        {/* Navigation links */}
        <NavButton to="/" text="Home" />
        <NavButton to="/soon" text="About" />
        <NavButton to="/soon" text="Review" />
        <NavButton to="/contact" text="Contact" />
        {userLogin ? (
          <>
            <i className="text-4xl text-B-yellow hover:text-L-black transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 bi bi-person-circle"></i>
            <button
              className="p-2 px-4 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
              onClick={handleLogout}
            >
              LOG OUT
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="p-2 px-4 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
            >
              LOGIN
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
        {/* Mobile navbar */}
        {showMobileNav && (
          <div className="absolute top-16 right-0 mt-3 mr-8 w-80 bg-white p-3 shadow-lg rounded-2xl transition duration-300 ease-in-out transform">
            <ul className="flex flex-col items-center gap-3">
              <li>
                <NavButton to="/" text="Home" />
              </li>
              <li>
                <NavButton to="/soon" text="About" />
              </li>
              <li>
                <NavButton to="/soon" text="Review" />
              </li>
              <li>
                <NavButton to="/contact" text="Contact" />
              </li>
              <div className="flex gap-2">
                {userLogin ? (
                  <li>
                    <p>Profile</p>
                    <button
                      className="p-2 px-6 w-28 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
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
                        className="p-2 px-4 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                      >
                        LOGIN
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="p-2 px-4 bg-B-yellow rounded-full font-bold hover:bg-L-black hover:text-B-yellow shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                      >
                        SIGN UP
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
