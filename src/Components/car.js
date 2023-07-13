import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSnapCarousel } from "react-snap-carousel";
import "../CSS/car.css";

const ListOfcar = ({ image, title, para, link }) => {
  return (
    <div id="getWrap" className="wrapper">
      <ul className="p-3 carousel">
        <li className="card">
          <div className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-150  img">
            {image}
          </div>
          <h2 className="font-bold text-2xl text-B-yellow m-2">{title}</h2>
          <p className="text-white para">{para}</p>
          <div className="flex flex-wrap gap-2 p-2">
            <Link
              className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 infoBTN"
              to={link}
            >
              More Info
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

const AdvancedCarousel = () => {
  const { scrollRef, next, prev } =
    useSnapCarousel();

    const [imageData, setImageData] = useState([]);
    const imageIds = useMemo(() => [1, 2, 3, 4, 5, 6], []); // Example image IDs
  
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const imagePromises = imageIds.map(async (id) => {
            const response = await fetch(
              `https://car-rental-back.onrender.com/api/images/${id}`
            );
            if (!response.ok) {
              throw new Error(`Error retrieving image with ID ${id}`);
            }
            const blob = await response.blob();
            return URL.createObjectURL(blob);
          });
  
          const imageUrls = await Promise.all(imagePromises);
          setImageData(imageUrls);
        } catch (error) {
          alert("Error:", error);
        }
      };
  
      fetchImages();
    }, [imageIds]);

  const carList = [
    {
      image: <img src={`${imageData[1]}`} alt="" />,
      title: "Bugatti Chiron",
      para: "Price: $1,000,000 | $1500/month",
      link: "/info1"
    },
    {
      image:  <img src={`${imageData[2]}`} alt="" />,
      title: "Dodge Hellcat 2020",
      para: "Price: $450,000 | $450/month",
      link: "/soon"
    },
    {
      image:  <img src={`${imageData[0]}`} alt="" />,
      title: "AC Shelby Cobra",
      para: "Price: $500,000 | $7000/month",
      link: "/soon"
    },
    {
      image:  <img src={`${imageData[3]}`} alt="" />,
      title: "Nissan Silvia S15",
      para: "Price: $150,000 | $200/month",
      link: "/soon"
    },
    {
      image:  <img src={`${imageData[4]}`} alt="" />,
      title: "Ford Mustang 2022",
      para: "Price: $250,000 | $500/month",
      link: "/soon"
    },
    {
      image:  <img src={`${imageData[5]}`} alt="" />,
      title: "Lamborghini Sian",
      para: "Price: $550,000 | %700/month",
      link: "/soon"
    },

  ];

  return (
    <div className="bg-white px-5 removePad">
      <h2 className="text-4xl font-bold text-center p-4">
        <span className="underline decoration-B-yellow">Cars F</span>or Rent
      </h2>

      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "hidden",
          scrollSnapType: "x mandatory",
        }}
      >
        {carList.map((car, index) => (
          <ListOfcar
            key={index}
            image={car.image}
            title={car.title}
            para={car.para}
            link={car.link}
          />
        ))}
      </ul>

      <div
        className="flex justify-center p-2 gap-2 h-20
      iconBTN"
      >
        <button onClick={() => prev()}
        className="bg-B-yellow w-11 h-11 rounded-full active:transform active:-translate-y-1/4 scale-105 duration-150">
          <i id="left"className="bi bi-caret-left-fill"></i>
        </button>
        <button onClick={() => next()}
        className="bg-B-yellow w-11 h-11 rounded-full active:transform active:-translate-y-1/4 scale-105 duration-150">
          <i id="right" className="
          bi bi-caret-right-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default AdvancedCarousel;
