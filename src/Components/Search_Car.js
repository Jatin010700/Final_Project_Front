import React, { useState } from "react";
import { NavBar } from "./navbar";
import { Footer } from "./footer";

export const SearchCar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Array of car data
  const carData = [
    {
      name: "Bugatti",
      image: "assets/car1.jpg",
      information:
        "The Bugatti Chiron combines extraordinary power with exquisite craftsmanship. Its aerodynamic design, highlighted by the signature horseshoe grille and C-shaped taillights, not only enhances performance but also exudes elegance. Inside the cabin, the Bugatti Chiron showcases the finest materials, including premium leather, carbon fiber, and aluminum accents. Advanced technologies such as a digital instrument cluster, touchscreen infotainment system, and high-end audio system create a luxurious driving experience.",
    },
    {
      name: "Dodge",
      image: "assets/car4.jpg",
      information:
        "The Dodge is known for its powerful performance and iconic American muscle car design. With its aggressive stance and high-performance engines, the Dodge delivers exhilarating driving experiences. Inside the cabin, you'll find a blend of comfort and technology, providing a thrilling yet comfortable ride.",
    },
    {
      name: "Nissan",
      image: "assets/car7.jpg",
      information:
        "Nissan offers a range of models, from compact cars to SUVs, known for their reliability and innovative features. With stylish designs and advanced safety technologies, Nissan vehicles provide a comfortable and enjoyable driving experience. Whether you're looking for efficiency, versatility, or performance, Nissan has a car that suits your needs.",
    },
  ];

  // Filtered car results based on search query
  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="bg-white">
        <div className="p-4 flex justify-center">
          <input
            type="text"
            placeholder="Search. . ."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="rounded-full py-2 px-4 bg-G-white text-black w-full md:w-2/4 border-2 border-B-yellow"
          />
        </div>
        <div className="p-4">
          {filteredCars.map((car, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row p-4 mt-2 rounded-2xl border-2 border-L-black"
            >
              <div className="md:w-1/2">
                <p className="text-4xl mb-4">{car.name}</p>
                <img src={car.image} alt="" className="w-full rounded-2xl" />
              </div>
              <div className="md:w-1/2 md:pl-4 mt-14">
                <h2 className="font-bold text-xl">
                  <span className="underline decoration-B-yellow">
                    Information
                  </span>
                </h2>
                <p>{car.information}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
