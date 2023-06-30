import React, { useEffect } from "react";
import "../CSS/header.scss"

//header uses sass
export const Header = () => {

  useEffect(() => {
    const KEY_UP = 38;
    const KEY_DOWN = 40;

    let scrollingClass = 'js-scrolling',
      scrollingActiveClass = scrollingClass + '--active',
      scrollingInactiveClass = scrollingClass + '--inactive',
      scrollingTime = 1350,
      scrollingIsActive = false,
      currentPage = 1,
      countOfPages = document.querySelectorAll('.' + scrollingClass + '__page').length,
      prefixPage = '.' + scrollingClass + '__page-';

    const switchPages = () => {
      let getPageDomEl = (page = currentPage) => {
        return document.querySelector(prefixPage + page);
      };

      scrollingIsActive = true;

      removeClass(getPageDomEl(), scrollingInactiveClass);
      addClass(getPageDomEl(), scrollingActiveClass);

      addClass(getPageDomEl(currentPage - 1), scrollingInactiveClass);

      removeClass(getPageDomEl(currentPage + 1), scrollingActiveClass);

      setTimeout(() => {
        scrollingIsActive = false;
      }, scrollingTime);
    };

    const scrollingUp = () => {
      if (currentPage === 1) {
        return;
      }
      currentPage--;
      switchPages();
    };

    const scrollingDown = () => {
      if (currentPage === countOfPages) {
        return;
      }
      currentPage++;
      switchPages();
    };

    const mouseWheelEvent = (e) => {
      if (scrollingIsActive) {
        return;
      }

      if (e.wheelDelta > 0 || e.detail < 0) {
        scrollingUp();
      } else if (e.wheelDelta < 0 || e.detail > 0) {
        scrollingDown();
      }
    };

    const keyDownEvent = (e) => {
      if (scrollingIsActive) {
        return;
      }

      let keyCode = e.keyCode || e.which;

      if (keyCode === KEY_UP) {
        scrollingUp();
      } else if (keyCode === KEY_DOWN) {
        scrollingDown();
      }
    };

    const addClass = (el, className) => {
      if (el === null) {
        return;
      }

      if (el.classList) {
        el.classList.add(className);
      } else if (!hasClass(el, className)) {
        el.className += ' ' + className;
      }
    };

    const removeClass = (el, className) => {
      if (el === null) {
        return;
      }

      if (el.classList) {
        el.classList.remove(className);
      } else if (hasClass(el, className)) {
        let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
      }
    };

    const hasClass = (el, className) => {
      if (el === null) {
        return;
      }

      if (el.classList) {
        return el.classList.contains(className);
      } else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
      }
    };

    document.addEventListener('mousewheel', mouseWheelEvent, false);
    document.addEventListener('DOMMouseScroll', mouseWheelEvent, false);
    document.addEventListener('keydown', keyDownEvent, false);

    return () => {
      document.removeEventListener('mousewheel', mouseWheelEvent, false);
      document.removeEventListener('DOMMouseScroll', mouseWheelEvent, false);
      document.removeEventListener('keydown', keyDownEvent, false);
    };
  }, []);
    return(
        <div className=" main-header">
        <div className="short">
            <div className="slider-pages">
          
              <article className="js-scrolling__page js-scrolling__page-1 js-scrolling--active">
                <div className="slider-page slider-page--left">
                  <div className="slider-page--skew">
                    <div className="slider-page__content">
                    </div>
                  </div>
                </div>
            
                <div className="slider-page slider-page--right">
                  <div className="slider-page--skew">
                    <div className=" slider-page__content">
                      <h1 className="slider-page__title slider-page__title--big">
                        Welcome to Car Rental</h1>  
                        <p className=" slider-page__description">We are your one-stop-shop for all your car rental needs. Whether you're going on a road trip or need a car for your daily commute, 
                        we've got you covered. With a wide range of vehicles to choose from, you'll find the perfect car for your needs and budget.</p>

                     <h2 className="slider-page__title">
                      </h2> 
                       <p className="slider-page__description">
                      </p> 
                    </div>
                  </div>
                </div>
              </article>
            
            
              <article className="js-scrolling__page js-scrolling__page-2">
                <div className="slider-page slider-page--left">
                  <div className="slider-page--skew">
                    <div className="slider-page__content">
                      <h1 className="slider-page__title">
                        ENJOY THE RIDE!!!
                      </h1>
                      <p className="slider-page__description">
                        Experience luxury on wheels with Car Rental!
                        Indulge in a first-class driving experience with our premium
                        car rental solutions. Whether you have a business meeting, a special occasion, or simply want to treat yourself, our selection of high-end vehicles will exceed your expectations. From sleek sedans to sleek convertibles, 
                        we offer the epitome of elegance and performance. Enjoy the thrill of 
                        the road with Car Rental and elevate your journey to new heights.
                      </p>
                    </div>
                  </div>
                </div>
            
                <div className="slider-page slider-page--right">
                  <div className="slider-page--skew">
                    <div className="slider-page__content">
                    </div>
                  </div>
                </div>
              </article>
            
            
              <article className="js-scrolling__page js-scrolling__page-3">
                <div className="slider-page slider-page--left">
                  <div className="slider-page--skew">
                    <div className="slider-page__content">
                    </div>
                  </div>
                </div>
            
                <div className="slider-page slider-page--right">
                  <div className="slider-page--skew">
                    <div className="slider-page__content">
                      <h1 className="slider-page__title">
                        <b>DISCOVER</b>
                      </h1>
                      <p className="slider-page__description">
                        Discover the joy of driving with Car Rental!
                        At Car Rental, we believe that every mile traveled should be enjoyable. 
                        That's why we provide a fleet of well-maintained and comfortable vehicles that will make your drive a pleasure.
                         Whether you're a solo traveler, a group of friends, or a family, we have the perfect car to accommodate your needs. With affordable rates and friendly service,
                          we're committed to ensuring that you have an exceptional experience with us. Get behind the wheel and let the adventure begin!
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            
            </div>
            </div>
    </div>
    

    )
}