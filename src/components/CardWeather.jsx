import React from "react";
import { useEffect, useState } from "react";
import Project from "../api/ReactProjectData.json";
import { RingLoader } from "react-spinners";

function CardWeather() {
  // Use effect ve usestate ile bilgilerin jsondan 1 saniye sonra alınması
  const [cardItem, setCardItem] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCardItem(Project);
    }, 1000);
  }, []);
  // cardItem state'i henüz yüklenmemişse, yüklenirken gösterilecek yükleme animasyonu ekledim
  if (!cardItem) {
    return (
      <div className="flex items-center justify-center h-full mt-[50%]">
        <RingLoader color="#ffffff" size={64} />
      </div>
    );
  }
  // cardItem state'inden alınan veriler
  const {
    date,
    airConditions,
    weeklyWeather: { current },
  } = cardItem;

  // Hava durumu detaylarından formatlanan veriler
  const [realFeel, wind, changeOfRain, uvIndex] = airConditions.split("::");

  // Tarih formatlama
  const formattedDate = new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: "true",
    timeZone: "GMT",
  });

  return (
    <div className="h-full">
      <div className="flex flex-col pt-[10px] justify-center items-start  pl-2 ">
        <div className="flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="55"
            viewBox="0 0 59 60"
            fill="none"
          >
            <path
              d="M50.4016 29.5912C50.4016 18.0151 41.0452 8.63083 29.5035 8.63083C17.9618 8.63083 8.60548 18.0151 8.60548 29.5912C8.60548 41.1674 17.9618 50.5516 29.5035 50.5516C41.0452 50.5516 50.4016 41.1674 50.4016 29.5912ZM27.6596 17.2616C27.6596 16.2402 28.4851 15.4121 29.5035 15.4121C30.5219 15.4121 31.3475 16.2402 31.3475 17.2616V29.5912C31.3475 30.2289 31.0199 30.8216 30.4808 31.1596L23.105 35.7832C22.2414 36.3245 21.1038 36.0612 20.5641 35.1951C20.0243 34.3289 20.2869 33.1879 21.1504 32.6465L27.6596 28.5662V17.2616Z"
              fill="white"
            />
          </svg>
          <p className="text-center text-[22px] ml-8">{formattedDate} GMT</p>
        </div>
        <div className="pl-2 text-[22px] font-bold">AIR CONDITIONS</div>
      </div>

      <div className="relative px-2">
        <div
          className=" absolute
            right-0 left-0 w-full top-0 z-0 bottom-0 
             overflow-y-hidden
             rounded-priv
        "
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 699 320">
            <path
              className="opacity-40"
              d="M0 133.777C0 133.777 117.579 60.3639 143.468 58.7439C167.199 57.2588 330.083 162.635 330.083 162.635C330.083 162.635 469.236 2.95009 504.833 0.0642848C540.431 -2.82152 699 92.4124 699 92.4124V381H0V133.777Z"
              fill="url(#paint0_linear_0_87)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_87"
                x1="349.5"
                y1="0"
                x2="349.5"
                y2="381"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C4C3C1" />
                <stop offset="1" stopColor="#C4C3C1" stopOpacity="0%" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-y-4 mt-2 pb-4 md:pb-0">
          <div className="flex justify-between items-between py-2 ">
            <div className="flex z-50 items-center justify-center ">
              <img
                className="md:hidden xl:block !h-[38.76px]"
                width={42}
                src="/Vector.svg"
                alt=""
              />
              <div className="ml-[14px]  w-20 md:w-24">
                <p className="whitespace-nowrap text-[16px] md:text-[18px] font-medium ">
                  Real Feel
                </p>
                <span className="text-center text-[16px] md:text-[18px]">
                  {realFeel}°
                </span>
              </div>
            </div>
            <div className="flex z-50 items-center justify-center">
              <img
                className="!h-[38.76px] md:hidden xl:block"
                width={42}
                src="/wind.svg"
                alt=""
              />
              <div className="ml-[14px] w-20 md:w-24">
                <p className="whitespace-nowrap text-[16px] md:text-[18px] font-medium ">
                  Wind
                </p>
                <span className="text-center text-[16px] md:text-[18px]">
                  {wind} km/hr
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex z-50 items-center justify-center">
              <img
                className="!h-[38.76px] md:hidden xl:block"
                width={42}
                src="/Frame.svg"
                alt=""
              />
              <div className="ml-[14px] w-20 md:w-24">
                <p className=" whitespace-nowrap text-[16px] md:text-[18px] font-medium ">
                  Change of Rain
                </p>
                <span className="text-center text-[16px] md:text-[18px]">
                  {changeOfRain}%
                </span>
              </div>
            </div>
            <div className="flex z-50 items-center justify-center">
              <img
                className="!h-[38.76px] md:hidden xl:block"
                width={42}
                src="/Sun.png"
                alt=""
              />
              <div className="ml-[14px] w-20 md:w-24">
                <p className=" whitespace-nowrap text-[16px] md:text-[18px] font-medium ">
                  UV Index
                </p>
                <span className="text-center text-[16px] md:text-[18px]">
                  {uvIndex}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWeather;
