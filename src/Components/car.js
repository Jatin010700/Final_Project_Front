import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSnapCarousel } from "react-snap-carousel";
import "../CSS/car.css";
import { Preloader } from "./preloader"
//carousel not working as intended
//making some changes like adding space seem to fixed it

const ListOfcar = ({ image, title, para, link }) => {
  return (
    <div id="getWrap" className="wrapper">
      <ul className="p-3 carousel">
        <li className="card">
          <div className="transition ease-in-out hover:scale-105 duration-150  img">
            {image}
          </div>
          <h2 className="font-bold text-2xl text-B-yellow m-2">{title}</h2>
          <p className="text-white para">{para}</p>
          <div className="flex flex-wrap gap-2 p-2">
            <Link
              className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:scale-110 duration-150 infoBTN"
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
  const { scrollRef, next, prev } = useSnapCarousel()

    const [carListings, setCarListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchCarListings = async () => {
        // setIsLoading(true);
        try {
          const response = await fetch('https://car-rental-back.onrender.com/api/car-data');
          if (response.ok) {
            const data = await response.json();
            // console.log('Fetched data:', data);
            setCarListings(data);
          } else {
            console.error('Failed to fetch car listings');
          }
        } catch (error) {
          console.error('Error during fetch:', error);
        } 
        finally {
          setIsLoading(false); 
        }
      };
  
      fetchCarListings();
    }, []); // Run this effect only once on component mount
  
   if (isLoading) {
    return <Preloader className="p-10 bg-white flex 
    justify-center items-center" size={75}/>
   }
    const mappedCarListings = carListings.map((listing, index) => ({
      image: <img src={JSON.parse(listing.image_url)[0]} alt="" />,
      title: listing.car_name,
      para: `Price: $${listing.price} | $${listing.rent}/month`,
      link: `/info1/${encodeURIComponent(listing.car_name)}
      /${encodeURIComponent(JSON.parse(listing.image_url)[0])}
      /${encodeURIComponent(listing.price)}
      /${encodeURIComponent(listing.rent)}
      /${encodeURIComponent(listing.login_user_name)}`
    })).slice(0, 8);

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
        {mappedCarListings.map((car, index) => (
          <Link key={index} to={car.link}>
            
          <ListOfcar
            image={car.image}
            title={car.title}
            para={car.para}
            link={car.link}
          />
          </Link>
        ))}
      </ul>

      <div
        className="flex justify-center p-2 gap-2 h-20
      iconBTN"
      >
        <button onClick={() => prev()}
        className="bg-B-yellow w-11 h-11 rounded-full active:transform active:-translate-y-1 transition ease-in-out hover:scale-110 duration-150">
          <i id="left"className="bi bi-caret-left-fill"></i>
        </button>
        <button onClick={() => next()}
        className="bg-B-yellow w-11 h-11 rounded-full active:transform active:-translate-y-1 transition ease-in-out hover:scale-110 duration-150">
          <i id="right" className="
          bi bi-caret-right-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default AdvancedCarousel;


    // const [imageData, setImageData] = useState([]);
    // const imageIds = useMemo(() => [1, 2, 3, 4, 5, 6], []); // Example image IDs
  
    // // https://car-rental-back.onrender.com/api/images/${id}

    // useEffect(() => {
    //   const fetchImages = async () => {
    //     try {
    //       const imagePromises = imageIds.map(async (id) => {
    //         const response = await fetch(
    //           `http://localhost:5000/api/car-data/${id}`
    //         );
    //         if (!response.ok) {
    //           throw new Error(`Error retrieving carData with ID ${id}`);
    //         }
    //         const blob = await response.blob();
    //         return URL.createObjectURL(blob);
    //       });
  
    //       const imageUrls = await Promise.all(imagePromises);
    //       setImageData(imageUrls);
    //     } catch (error) {
    //       alert("Error:", error);
    //     }
    //   };
  
    //   fetchImages();
    // }, [imageIds]);