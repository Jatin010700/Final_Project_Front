import React from "react";
import { NavBar } from "../Components/navbar";
import { Footer } from "../Components/footer";
import { Link } from "react-router-dom";

export const ForgotPass = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white p-4 md:p-20 flex justify-center items-center">
        <div className="flex flex-wrap flex-col w-full max-w-md bg-L-black text-white p-4 md:p-8 rounded-2xl">
          
          <h1 className="font-bold text-2xl md:text-3xl text-center mb-4">Find your Account</h1>
          <hr />
          <p className="text-center mt-4">
            Please enter your email to search for your account.
          </p>
          <div className="mt-4 flex flex-col">
            <label className="p-2">Email<span className="text-B-yellow"> *</span></label>
            <input
              type="email"
              className="rounded-full py-2 px-4 bg-G-white text-black mb-4 w-auto"
              placeholder="Enter your Email"
            />
            <div className="flex justify-center gap-4">
              <Link
                className=" bg-L-black hover:bg-B-yellow hover:text-L-black text-B-yellow py-2 px-4 rounded-full font-bold border-2 border-B-yellow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                to="/login"
              >
                Cancel
              </Link>
              <Link
                className=" bg-L-black hover:bg-B-yellow hover:text-L-black text-B-yellow py-2 px-4 rounded-full font-bold border-2 border-B-yellow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                to=""
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
