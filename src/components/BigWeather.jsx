import React from "react";
import { useEffect, useState } from "react";
import Project from "../api/ReactProjectData.json";
import { RingLoader } from "react-spinners";

function BigWeather() {
  // Use effect ve usestate ile bilgilerin jsondan 1 saniye sonra alınması
  const [projectItem, setProjectItem] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setProjectItem(Project);
    }, 1000);
  }, []);
  // projectItem state'i henüz yüklenmemişse, yüklenirken gösterilecek yükleme animasyonu ekledim
  if (!projectItem) {
    return (
      <div className="flex items-center justify-center h-full mt-[50%]">
        <RingLoader color="#ffffff" size={64} />
      </div>
    );
  }

  // projectItem state'inden alınan veriler
  const { city, type, degree, date } = projectItem;

  // Tarih formatlama
  const currentDate = new Date(date);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${
    daysOfWeek[currentDate.getDay()]
  } | ${currentDate.getDate()} ${
    months[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  return (
    <div className="text-white h-full px-6 py-2 ">
      <div className="flex flex-col-reverse md:flex-row h-full justify-between items-center">
        <div className="flex flex-col h-full items-center justify-between">
          <div className="flex items-center">
            <div className="w-[20px] h-[28px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="28"
                viewBox="0 0 30 40"
                fill="none"
              >
                <path
                  d="M15 -1.92296e-05C6.71783 -1.92296e-05 -2.67029e-05 6.26998 -2.67029e-05 14C-2.67029e-05 24.5 15 40 15 40C15 40 30 24.5 30 14C30 6.26998 23.2821 -1.92296e-05 15 -1.92296e-05ZM15 19C12.0428 19 9.64283 16.76 9.64283 14C9.64283 11.24 12.0428 8.99998 15 8.99998C17.9571 8.99998 20.3571 11.24 20.3571 14C20.3571 16.76 17.9571 19 15 19Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-[24px] font-medium ml-[10px] whitespace-nowrap">
              {city}
            </div>
          </div>
          <div className="text-[32.693px]">{type}</div>
          <div className="text-[54px]">{degree}°C</div>
        </div>
        <div className="">
          <svg
            width="233"
            height="150"
            viewBox="0 0 233 216"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon">
              <path
                d="M151.478 158.667H186.25C211.931 158.667 232.75 138.37 232.75 113.333C232.75 92.0702 217.734 74.2263 197.477 69.3301C197.74 67.0333 197.875 64.6987 197.875 62.3333C197.875 27.9076 169.249 0 133.937 0C104.649 0 79.9601 19.199 72.3897 45.3922C71.5982 45.3531 70.8015 45.3333 70 45.3333C44.3188 45.3333 23.5 65.6298 23.5 90.6667C23.5 91.3101 23.5137 91.9504 23.541 92.5872C9.9742 97.2434 0.25 109.848 0.25 124.667C0.25 143.444 15.8641 158.667 35.125 158.667H68.2359L118.032 73.7104C123.946 63.6198 139.75 67.7114 139.75 79.3333V124.667H151.375C160.301 124.667 165.897 134.067 161.468 141.623L151.478 158.667Z"
                fill="white"
              />
              <path
                d="M81.625 158.667L128.125 79.3333V136H151.375L104.875 215.333V158.667H81.625Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <div className="text-[40px] text-center">{formattedDate}</div>
      </div>
    </div>
  );
}

export default BigWeather;
