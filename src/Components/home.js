import React from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from './navbar';
import { Header } from './header';
import { Car } from './car';
import { ChooseUs } from './chooseUs';
import { Review } from './reviews';
import { Footer } from './footer';

export function Home() {
  const userLogin = useSelector((state) => state.userLogin);

  return (
    <>
      <NavBar userLogin={userLogin} />
      <Header />
      <Car />
      <ChooseUs />
      <Review />
      <Footer />
    </>
  );
}
