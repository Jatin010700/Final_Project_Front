import React, { useState } from "react";
import { NumberPages } from "../number_of_page";
import { NavBar } from "../navbar";
import { Footer } from "../footer";

const ListOfCar = ({ name, image, info, icon, searchQuery }) => {
  const filteredCars = name.toLowerCase().includes(searchQuery.toLowerCase());

  if (!filteredCars) {
    return null; // Skip rendering if the car doesn't match the search query
  }

  return (
    <>
      <p className="text-4xl mb-4 font-bold text-B-yellow text-uppercase">
        {name}
      </p>
      <img
        src={image}
        alt=""
        className="w-full rounded-2xl  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
      />

      <div className="md:w-3/4 md:pl-4 mt-4">
        <h2 className="font-bold text-xl">
          <span className="underline decoration-B-yellow">Pri</span>ce :
        </h2>
        <p className="">{info}</p>
        <p className="font-bold text-xl">
          <span className="underline decoration-B-yellow mt-2">Spec</span>
          ification :
        </p>
        <div className="flex flex-wrap gap-4 text-B-yellow text-2xl p-2">
          {icon}
        </div>
        <button className="text-L-black bg-B-yellow rounded-full py-2 px-12 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150">
          Rent Now
        </button>
      </div>
    </>
  );
};

export const SearchCar1 = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const carData = [
    {
      name: "Dodge",
      image: "assets/car4.jpg",
      info: "$450,000 | $450/month",
      icon: [
        <i className="bi bi-speedometer"></i>,
        <i class="bi bi-fuel-pump-fill"></i>,
        <i class="bi bi-signpost-fill"></i>,
      ],
    },
    {
      name: "Nissan",
      image: "assets/car7.jpg",
      info: "$150,000 | $200/month",
      icon: [
        <i className="bi bi-speedometer"></i>,
        <i class="bi bi-fuel-pump-fill"></i>,
        <i class="bi bi-signpost-fill"></i>,
      ],
    },
    {
      name: "Bugatti",
      image: "assets/car1.jpg",
      info: "$750,000 | $1500/month",
      icon: [
        <i className="bi bi-speedometer"></i>,
        <i class="bi bi-fuel-pump-fill"></i>,
        <i class="bi bi-signpost-fill"></i>,
      ],
    },
    {
      name: "Bugatti",
      image: "assets/car1.jpg",
      info: "$750,000 | $1500/month",
      icon: [
        <i className="bi bi-speedometer"></i>,
        <i class="bi bi-fuel-pump-fill"></i>,
        <i class="bi bi-signpost-fill"></i>,
      ],
    },
    {
      name: "Dodge",
      image: "assets/car4.jpg",
      info: "$450,000 | $450/month",
      icon: [
        <i className="bi bi-speedometer"></i>,
        <i class="bi bi-fuel-pump-fill"></i>,
        <i class="bi bi-signpost-fill"></i>,
      ],
    },
    {
      name: "Nissan",
      image: "assets/car7.jpg",
      info: "$150,000 | $200/month",
      icon: [
        <i className="bi bi-speedometer"></i>,
        <i class="bi bi-fuel-pump-fill"></i>,
        <i class="bi bi-signpost-fill"></i>,
      ],
    },
    // Add more car objects here if needed
  ];

  // Filtered car results based on search query
  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="bg-white">
        <div className="pt-4 mr-5 flex justify-center">
          <i className="relative top-2 left-10 text-lg text-grey hover:text-B-yellow bi bi-search"></i>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full py-2 px-5 bg-G-white text-black w-full md:w-2/4 border-2 border-B-yellow"
          />
        </div>
        <NumberPages />
        <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <div
                key={index}
                className="flex flex-col bg-L-black text-white p-4 rounded-2xl border-2 border-L-black"
              >
                <ListOfCar
                  name={car.name}
                  image={car.image}
                  info={car.info}
                  icon={car.icon}
                  searchQuery={searchQuery}
                />
              </div>
            ))
          ) : (
            <div className="h-56">
              <div className="flex flex-col bg-L-black text-white p-4 rounded-2xl">
                <p className="text-2xl font-bold text-center">
                  <i class="bi bi-x-circle"></i> CAR NOT FOUND !
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <NumberPages/>
      <Footer />
    </>
  );
};
