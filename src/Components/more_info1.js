import React from "react";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export const Info1 = () => {
  return (
    <>
      <NavBar />

      <div className="bg-white ">
        <div className="flex flex-col justify-between pt-4 px-4 md:flex-row">
          <h2 className="font-bold text-4xl mb-4 md:mb-0">
            <span className="underline decoration-B-yellow">Buga</span>tti
            Chiron
          </h2>
          <h2 className="font-bold text-xl ">
            <span className="underline decoration-B-yellow">For</span> Rent
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center w-full p-4">
          <div className="p-4 text-justify bg-L-black rounded-2xl">
            <img src="assets/car1.jpg" alt="" className="rounded-2xl" />
          </div>
          <div className="flex flex-col gap-2 border-2 bg-L-black text-white border-L-black rounded-2xl p-4 ">
            <p className="p-2 bg-B-yellow text-L-black w-full md:w-96  rounded-2xl font-bold">
              Duty-Paid
            </p>
            <p className="text-2xl p-2">$750,000</p>
            <hr className="text-B-yellow" />
            <p className="">
              On road without{" "}
              <span className="underline decoration-B-yellow">insurance</span>
              <br />
              (Price may change with fluctuation)
            </p>
            <hr className="text-B-yellow" />
            <p className="text-B-yellow">Rent estimation:</p>
            <p className="">
              <span className="text-2xl">$1,500/</span>month
            </p>
            <hr className="text-B-yellow" />
            <p className="p-2 bg-B-yellow text-L-black rounded-2xl font-bold w-full md:w-96 ">
              Seller
            </p>
            <div className="flex justify-center">
            <img src="assets/Bugatti-logo.png" alt="" className="w-40 text" /></div>
            <button className="border-2 border-B-yellow rounded-full  py-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 hover:bg-B-yellow hover:text-L-black font-bold">
              Rent Now
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-center w-full p-4">
          <div className="p-4 text-justify border-2 border-l-L-black rounded-2xl">
            <h2 className="font-bold text-xl">
              <span className="underline decoration-B-yellow">Info</span>rmation
            </h2>
            <p className="p-2">
              The Bugatti Chiron is a hypercar that represents the pinnacle of
              automotive engineering and luxury. Here are some key features of
              the Bugatti Chiron:
            </p>
            <hr />
            <ul className="p-2">
              <li>- Engine: Quad-Turbocharged W16</li>
              <li>- Horsepower: 1,500 HP</li>
              <li>- Acceleration: 0-60 mph in 2.4 seconds</li>
              <li>- Transmission: 7-speed dual-clutch automatic</li>
              <li>- Top Speed: Limited to 261 mph (electronically limited)</li>
              <li>- Seating Capacity: 2</li>
              <li>- Fuel Economy: 8 mpg city / 13 mpg highway</li>
            </ul>
            <hr />
            <p>
              The Bugatti Chiron combines extraordinary power with exquisite
              craftsmanship. Its aerodynamic design, highlighted by the
              signature horseshoe grille and C-shaped taillights, not only
              enhances performance but also exudes elegance.
            </p>
            <br />
            <p>
              Inside the cabin, the Bugatti Chiron showcases the finest
              materials, including premium leather, carbon fiber, and aluminum
              accents. Advanced technologies such as a digital instrument
              cluster, touchscreen infotainment system, and high-end audio
              system create a luxurious driving experience.
            </p>
          </div>
          <div className="flex flex-col gap-2 border-2 border-L-black rounded-2xl p-4 ">
            <h1 className="font-bold text-xl">
              <span className="underline decoration-B-yellow">Write</span> a
              review :
            </h1>
            <label className="text-L-black">Name:</label>
            <input
              type="text"
              className="rounded-full p-2 mb-2 border-2 border-L-black"
              placeholder="Enter First Name"
            />
            <label className="text-L-black">Leave a review:</label>
            <textarea
              className="rounded-2xl p-2  w-full md:w-96 border-2 border-L-black"
              placeholder="Leave a review"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
