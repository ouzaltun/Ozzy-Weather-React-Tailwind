import React from "react";
import BigWeather from "../components/BigWeather";
import HourlyWeather from "../components/HourlyWeather";
import Navbar from "../components/Navbar";
import AreaWeather from "../components/AreaWeather";
import SliderWeather from "../components/SliderWeather";
import CardWeather from "../components/CardWeather";
import { SocialIcon } from "react-social-icons";

// Ana sayfa
function Home() {
  return (
    // Arka plan resmi buradan verildi
    <div className="md:h-screen w-full bg-mainImage bg-cover flex justify-center transition-all items-center">
      <div className="grid grid-cols-12 gap-6 md:gap-4 w-[90%]  ">
        {/* 12 sütunlu bir grid sistemi */}
        <div className="col-span-12 md:col-span-8 md:row-span-2 ">
          <div className=" flex justify-center items-center ">
            <div>
              {/* Component 0, sayfanın üst kısmında gösterilir */}
              <BigWeather></BigWeather>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-2 md:row-span-4 col-start-1 row-start-2 ">
          <div
            className="md:h-full
           "
          >
            <div className="md:h-full  rounded-priv  bg-card-color ">
              {/* Component 1, sayfanın sol kısmında gösterilir */}
              <Navbar></Navbar>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-7 md:row-start-3 mb-10 md:mb-0 ">
          <div className=" ">
            <div className=" rounded-priv bg-card-color ">
              {/* Component 2, sayfanın orta kısmında gösterilir */}
              <AreaWeather></AreaWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-2 col-start-1 md:col-start-9 row-start-9 md:row-start-2 ">
          <div className="h-full w-full mb-6 md:mb-0">
            <div className="h-full w-full rounded-priv bg-card-color">
              {/* Component 5, sayfanın sağ üst kısmında gösterilir */}
              <HourlyWeather></HourlyWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 row-start-1 mt-10 mb:mt-0 ">
          <div className=" rounded-priv flex justify-center items-center">
            {/* Logo, sayfanın sağ üst kısmında gösterilir */}
            <div className="flex gap-x-10">
              <SocialIcon
                target="_blank"
                bgColor="#c4c3c1"
                fgColor="#000"
                url="https://github.com/ouzaltun/Ozzy-Weather-React-Tailwind"
              ></SocialIcon>
              <SocialIcon
                target="_blank"
                bgColor="#c4c3c1"
                fgColor="#000"
                url="https://www.linkedin.com/in/altunoguzhan/"
              ></SocialIcon>
              <SocialIcon
                target="_blank"
                bgColor="#c4c3c1"
                fgColor="#000"
                url="mailto:altunnoguzhan@gmail.com"
              ></SocialIcon>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-11 md:row-start-5  ">
          <div className="h-full w-full">
            <div className=" h-full w-full rounded-priv  bg-card-color">
              {/* Component 1 , sayfanın alt kısmında gösterilir */}
              <SliderWeather></SliderWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 h-auto md:col-span-4 md:row-span-3 col-start-1 md:col-start-9 row-start-13 md:row-start-4  ">
          <div className="">
            <div className=" rounded-priv  bg-card-color  ">
              {/* Component 1 , sayfanın sağ alt kısmında gösterilir */}
              <CardWeather></CardWeather>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
