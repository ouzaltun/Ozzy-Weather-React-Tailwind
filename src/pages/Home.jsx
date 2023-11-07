import React from "react";
import BigWeather from "../components/BigWeather";
import HourlyWeather from "../components/HourlyWeather";
import Navbar from "../components/Navbar";
import AreaWeather from "../components/AreaWeather";
import SliderWeather from "../components/SliderWeather";
import CardWeather from "../components/CardWeather";

function Home() {
  return (
    <div class=" md:h-screen w-full bg-green-500 flex justify-center items-center">
      <div class="grid grid-cols-12 grid-rows-6 gap-4 container mx-auto">
        <div class="col-span-12 md:col-span-8 md:row-span-2 bg-red-500">
          <div class="h-full w-full flex ustify-center items-center bg-orange-300">
            <BigWeather></BigWeather>
          </div>
        </div>
        <div class="col-span-12 md:col-span-2 md:row-span-4 col-start-1 row-start-2 bg-slate-200">
          <div class="h-full  w-full bg-amber-800">
            <Navbar></Navbar>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-7 md:row-start-3 bg-slate-200">
          <div class="h-full w-full bg-lime-700">
            <AreaWeather></AreaWeather>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 md:row-span-2 col-start-1 md:col-start-9 row-start-9 md:row-start-2 bg-slate-400">
          <div class="h-full w-full flex items-center justify-center bg-slate-500">
            <HourlyWeather></HourlyWeather>
          </div>
        </div>
        <div class="col-span-12 md:col-span-2 md:col-start-10 row-start-1 bg-slate-300">
          <div class="mt-24px flex items-center justify-center bg-blue-500">
            logo
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-11 md:row-start-5 bg-slate-600">
          <div class="h-full w-full bg-green-400">
            <SliderWeather></SliderWeather>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 md:row-span-3 col-start-1 md:col-start-9 row-start-13 md:row-start-4 bg-slate-300">
          <div class="h-full w-full bg-slate-500">
            <CardWeather></CardWeather>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
