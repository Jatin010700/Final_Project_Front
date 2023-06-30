import React from "react";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white p-4">
        <div className="flex flex-col sm:flex-row justify-around flex-wrap">
          <div className="w-full sm:w-2/4 flex flex-col items-center mt-10 sm:mt-32">
            <h1 className="font-bold text-4xl">Get in Touch</h1>
            <p>
              Want to get in touch? We'd love to hear from you<span className="text-B-yellow font-bold">...</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 shadow bg-L-black w-full sm:w-2/5 h-auto sm:h-80 text-white p-4 rounded-2xl mt-10 sm:mt-0">
            <label htmlFor="name">Name <span className="text-B-yellow">*</span></label>
            <input type="text" id="name" className="rounded-2xl h-10 p-2" placeholder="Enter Name"/>
            <label htmlFor="email">Email <span className="text-B-yellow">*</span></label>
            <input type="email" id="email" className="rounded-2xl h-10 p-2" placeholder="Enter Email" />
            <label htmlFor="message">Leave a message <span className="text-B-yellow">*</span></label>
            <textarea id="message" className="rounded-2xl h-24 p-2" placeholder="Message..."/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
