import React from "react";
import Slider from "react-slick"; // Kaydırmalı slider için react-slick kütüphanesini kullandım
import Project from "../api/ReactProjectData.json";
import { useState } from "react";
import classNames from "classnames";

function SliderWeather() {
  // Jsonda type bağlı resim olmadığı için switch case ile bağladım
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
  // Veriyi içeren state
  const [data, setData] = useState(Project.weeklyWeather);
  // Veriyi uygun hale getirmek için gerekli dizileri oluşturur
  const data2 = [data.previous];
  const previousArray = Object.values(data.previous);
  const currentArray = Object.values(data.current);
  const nextArray = Object.values(data.next);
  const degerler = previousArray.concat(currentArray, nextArray); // previousArray.concat ile eski haftanın verileri ile şimdiki hafta ve gelecek haftanın verileri liste olarak eklendi
  const keyprev = Object.keys(data.previous);
  const keycurrent = Object.keys(data.current);
  const keynext = Object.keys(data.next);
  const baslik = keyprev.concat(keycurrent, keynext);

  // Slider için ayarlar
  var settings = {
    dots: true, //Arrows yerine dots kullandım daha modern duruyor
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 7, //Tüm haftayı tek bir biçimde görebilelim diye slider 7 resim gösterecek
    slidesToScroll: 7,
    initialSlide: 7, //Bizim olduğumuz haftadan başlaması için slider'ı 7 den başlattım
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="h-full w-full px-2 pt-4 pb-2">
      <Slider {...settings}>
        {degerler.map((e, index) => (
          <div
            key={index}
            className={`px-2 ${index === 9 ? "border rounded-priv" : ""}`}
          >
            {console.log(index)}
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
