import React from "react";
import BigWeather from "../components/BigWeather";
import HourlyWeather from "../components/HourlyWeather";
import Navbar from "../components/Navbar";
import AreaWeather from "../components/AreaWeather";
import SliderWeather from "../components/SliderWeather";
import CardWeather from "../components/CardWeather";

function Home() {
  return (
    <div className="md:h-screen w-full bg-green-500 flex justify-center items-center">
      <div className="grid grid-cols-12 grid-rows-6 gap-4 ">
        <div className="col-span-12 md:col-span-8 md:row-span-2 bg-red-500  ">
          <div className="h-full flex justify-center items-center ">
            <div className="h-full w-full md:w-[50vw] bg-orange-300 md:h-[20vh]">
              <BigWeather></BigWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 md:row-span-4 col-start-1 row-start-2 bg-slate-200">
          <div className="h-full w-full ">
            <div className="h-full w-full  bg-amber-800 md:w-[8vw]">
              <Navbar></Navbar>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-7 md:row-start-3 bg-slate-200">
          <div className="h-full w-full ">
            <div className="h-full bg-lime-700 md:w-[42vw]">
              <AreaWeather></AreaWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-2 col-start-1 md:col-start-9 row-start-9 md:row-start-2 bg-slate-400">
          <div className="h-full w-full bg-slate-500">
            <div className="h-full md:h-[19vh] w-full bg-red-600">
              <HourlyWeather></HourlyWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 row-start-1 bg-slate-300">
          <div className=" bg-blue-500">logo</div>
        </div>
        <div className="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-11 md:row-start-5  bg-slate-600">
          <div className="h-full w-full ">
            <div className=" h-[28vh] bg-green-400 w-[42vw]">
              <SliderWeather></SliderWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-3 col-start-1 md:col-start-9 row-start-13 md:row-start-4  bg-slate-300">
          <div className="h-full w-full bg-slate-500">
            <div className="h-full w-full bg-red-500  ">
              <CardWeather></CardWeather>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
