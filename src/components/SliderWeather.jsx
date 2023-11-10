import React from "react";
import Slider from "react-slick";

function SliderWeather() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden px-8">
      <Slider {...settings}>
        <div className="px-2 ">1</div>
        <div className="px-2  ">2</div>
        <div className="px-2  ">3</div>
        <div className="px-2  ">4</div>
        <div className="px-2  ">5</div>
        <div className="px-2  ">6</div>
        <div className="px-2  ">7</div>
        <div className="px-2 ">1</div>
        <div className="px-2  ">2</div>
        <div className="px-2  ">3</div>
        <div className="px-2  ">4</div>
        <div className="px-2  ">5</div>
        <div className="px-2  ">6</div>
        <div className="px-2  ">7</div>
        <div className="px-2 ">1</div>
        <div className="px-2  ">2</div>
        <div className="px-2  ">3</div>
        <div className="px-2  ">4</div>
        <div className="px-2  ">5</div>
        <div className="px-2  ">6</div>
        <div className="px-2  ">7</div>
      </Slider>
    </div>
  );
}

export default SliderWeather;
