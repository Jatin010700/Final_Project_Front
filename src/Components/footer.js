import React from "react";
import { Icon } from "../User_Account/icon";

export const Footer = () => {
  return (
    <div className="bg-white">
      <div className="bg-L-black flex flex-wrap justify-center md:justify-evenly">
        <div className="bg-B-yellow text-L-black p-4 w-full md:w-2/5 flex flex-col">
          <h2 className="font-bold text-2xl">Contact Us:</h2>
          <p>123 Main Street Anytown, USA 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
          <hr className="m-2" />
          <p>&copy; 2023 Car Rental Company. <br/> All rights reserved by Jatin Oomajee.</p>
        </div>

        <div className="flex items-center p-4">
          <h2 className="font-bold text-2xl text-B-yellow mr-2">Follow Us: </h2>
          <div className="flex items-center gap-2">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};
