import React from 'react';
import Hero from '../Components/Hero/Hero';
import Carousel from '../Components/Carousel/Carousel';

function HomePage(props) {
  return(
    <>
    <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
    <Carousel />
    </>
  )
};

export default HomePage;