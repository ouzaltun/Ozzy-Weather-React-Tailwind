import React from "react";
import Slider from "react-slick";
import Project from "../api/ReactProjectData.json";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

function SliderWeather() {
  function name(params) {
    switch (params) {
      case "sunny cloudy":
        return <img src="/sunnycloudy.svg"></img>;
      case "sunny":
        return <img src="/sunny.svg"></img>;

      case "rainy":
        return <img src="/rainy.svg"></img>;
      case "sunny rainy":
        return <img src="/sunnyrainy.svg"></img>;
      case "thunder":
        return <img src="/thunder.svg"></img>;
    }
  }

  const [data, setData] = useState(Project.weeklyWeather);
  // const data2 = [data.current];
  const data2 = [data.previous, data.current, data.next];
  // const data3 = Object.values(data2[0]);
  // const data4 = Object.values(data3);
  const baslik = Object.keys(data2[0]);
  const degerler = Object.values(data2[0]);

  console.log(data2);

  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden px-2 pt-4 pb-2">
      <Slider {...settings}>
        {degerler.map((e, index) => (
          <div className="px-2 ">
            <div className="flex flex-col justify-center items-center gap-y-1">
              <div className="text-[12px] font-normal text-center">
                {baslik[index]}
              </div>
              <div className="w-14 h-12">{name(degerler[index].type)}</div>
              <div className="text-[24px] font-normal text-center">
                {degerler[index].degree}°
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderWeather;
