import React from "react";

export const ChooseUs = () => {
  return (
    <div className="bg-white">
        <h2 className="text-4xl font-bold text-center p-4 ">
          <span className="underline decoration-B-yellow">Why Ch</span>oose Us
        </h2>
        <div className="flex justify-center px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
          <div className="rounded-2xl">
            <img className="h-full w-full rounded-2xl" src="assets/lambor.gif" alt="" />
          </div>

          <div className="bg-L-black text-B-yellow rounded-2xl p-4 drop-shadow-md">
            <h3 className="font-bold text-3xl">Wide Selection of Cars</h3>
            <p>
              Choose from our extensive fleet of vehicles, ranging from compact
              cars to SUVs, ensuring you find the perfect fit for your needs and
              preferences.
            </p>

            <h3 className="font-bold text-3xl mt-2">Easy Booking Process</h3>
            <p>
              Our user-friendly online booking system makes it quick and
              effortless to reserve your desired car, giving you peace of mind
              before your trip.
            </p>
          </div>

          <div className="bg-B-yellow text-L-black rounded-2xl p-4 drop-shadow-md">
            <h3 className="font-bold text-3xl">Excellent Customer Service</h3>
            <p>
              Our dedicated customer support team is available 24/7 to assist
              you with any inquiries or issues you may have, ensuring a smooth
              and enjoyable car rental experience.
            </p>

            <h3 className="font-bold text-3xl">Competitive Prices</h3>
            <p>
              We offer competitive and transparent pricing options, allowing you
              to enjoy affordable rates.
            </p>
          </div>

          <div className="grid4">
            <img className="h-full w-full rounded-2xl" src="assets/ferrari.gif" alt="" />
          </div>
        </div>

        </div>
      </div>
  );
};
