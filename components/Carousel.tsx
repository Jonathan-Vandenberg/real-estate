import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ChevLeft, ChevRight } from "./svgs/Arrows";
import Image from "next/image";
import slide from "../public/heroImage.jpeg";
import slide1 from "../public/houseImage.jpeg";
import slide2 from "../public/houseImage1.jpeg";
import classNames from "classnames";

const Carousel = () => {
  const data = [
    {
      image: slide,
      Title: "Best house Ever",
      description: "3 beds, big garden, near schools",
      price: "R 1, 950, 000",
    },
    {
      image: slide1,
      Title: "Best house Ever",
      description: "3 beds, big garden, near schools",
      price: "R 1, 950, 000",
    },
    {
      image: slide2,
      Title: "Best house Ever",
      description: "3 beds, big garden, near schools",
      price: "R 1, 950, 000",
    },
  ];

  return (
    <CarouselProvider
      naturalSlideWidth={70}
      naturalSlideHeight={22}
      totalSlides={3}
      className="relative bg-gray"
    >
      <Slider>
        {data.map((featured, i) => (
          <Slide index={i} key={i}>
            <div className="flex">
              <div className="w-3/5">
                <Image
                  src={featured.image}
                  alt="slide image"
                  layout="responsive"
                />
              </div>
            </div>
          </Slide>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-12 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 ml-6">
        <ButtonBack>
          <ChevLeft className="text-bold w-8 h-8" />
        </ButtonBack>
      </div>
      <div className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 rounded-full p-1 mr-2">
        <ButtonNext>
          <ChevRight className={classNames("text-bold w-8 h-8")} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
