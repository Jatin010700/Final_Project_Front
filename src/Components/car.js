import React, { useEffect } from "react";
import "../CSS/car.css";
import { Link } from "react-router-dom";


export const Car = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];

    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft +=
          btn.id === "left" ? -firstCardWidth : firstCardWidth;
      });
    });

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }

      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(
        () => (carousel.scrollLeft += firstCardWidth),
        2500
      );
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchstart", dragStart);
    carousel.addEventListener("touchmove", dragging);
    document.addEventListener("touchend", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => (isAutoPlay = false));
    wrapper.addEventListener("mouseleave", () => (isAutoPlay = true));
  });
  return (
    <div className="bg-white">
      {" "}
      <h2 className="text-4xl font-bold text-center p-4">
        <span className="underline decoration-B-yellow">Cars F</span>or Rent
      </h2>
      <div id="getWrap" className="wrapper">
        <i id="left" className="bi bi-caret-left-fill"></i>

        <ul className="carousel">
          <li className="card">
            <div className="img">
              <img src="assets/car1.jpg" alt="img" draggable="false" />
            </div>
            <h2 className="font-bold text-2xl text-B-yellow m-2">
              Bugatti Chiron
            </h2>
            <p className="text-white para">Price: $750,000 | $1,500/month</p>
            <div className="flex flex-wrap gap-2 p-2">

              <Link className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 infoBTN" 
              to="/info1">
              More Info
              </Link>
            </div>
          </li>

          <li className="card">
            <div className="img">
              <img src="assets/car2.jpg" alt="img" draggable="false" />
            </div>
            <h2 className="font-bold text-2xl text-B-yellow m-2">
              AC Shelby Cobra
            </h2>
            <p className="text-white para">Price: $500,000 | $7,000/month </p>
            <div className="flex flex-wrap gap-2 p-2">
            <Link className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 infoBTN" 
              to="/soon">
              More Info
              </Link>
            </div>{" "}
          </li>

          <li className="card">
            <div className="img">
              <img src="assets/car4.jpg" alt="img" draggable="false" />
            </div>
            <h2 className="font-bold text-2xl text-B-yellow m-2">
              Dodge Hellcat 2020
            </h2>
            <p className="text-white para">Price: $450,000 | $450/month</p>
            <div className="flex flex-wrap gap-2 p-2">
            <Link className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 infoBTN" 
              to="/soon">
              More Info
              </Link>
            </div>
          </li>

          <li className="card">
            <div className="img">
              <img src="assets/car7.jpg" alt="img" draggable="false" />
            </div>
            <h2 className="font-bold text-2xl text-B-yellow m-2">
              Nissan Silvia S15
            </h2>
            <p className="text-white para">Price: $150,000 | $200/month</p>
            <div className="flex flex-wrap gap-2 p-2">
            <Link className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 infoBTN" 
              to="/soon">
              More Info
              </Link>
            </div>
          </li>

          <li className="card">
            <div className="img">
              <img src="assets/car9.jpg" alt="img" draggable="false" />
            </div>
            <h2 className="font-bold text-2xl text-B-yellow m-2">
              Ford Mustang 2022
            </h2>
            <p className="text-white para">Price: $250,000 | $500/month</p>
            <div className="flex flex-wrap gap-2 p-2">
            <Link className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 infoBTN" 
              to="/soon">
              More Info
              </Link>
            </div>
          </li>

          <li className="card">
            <div className="img">
              <img src="assets/car10.jpg" alt="img" draggable="false" />
            </div>
            <h2 className="font-bold text-2xl text-B-yellow m-2">
              Lamborgini Sian
            </h2>
            <p className="text-white para">Price: $550,000 | $700/month</p>
            <div className="flex flex-wrap gap-2 p-2">
            <Link className="bg-B-yellow rounded-full py-2 px-20 font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150 infoBTN" 
              to="/soon">
              More Info
              </Link>
            </div>
          </li>
        </ul>
        <i id="right" className="bi bi-caret-right-fill"></i>
      </div>
    </div>
  );
};
