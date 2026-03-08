import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestination from '../components/FeaturedDestination';
import ExlusiveOffers from '../components/ExlusiveOffers';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExlusiveOffers />
      <Testimonial />
      <NewsLetter />
    </>
  );
};

export default Home;
