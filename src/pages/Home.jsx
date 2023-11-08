import React from "react";
import BigWeather from "../components/BigWeather";
import HourlyWeather from "../components/HourlyWeather";
import Navbar from "../components/Navbar";
import AreaWeather from "../components/AreaWeather";
import SliderWeather from "../components/SliderWeather";
import CardWeather from "../components/CardWeather";

function Home() {
  return (
    <div className="md:h-screen w-full bg-mainImage bg-cover flex justify-center items-center">
      <div className="grid grid-cols-12 grid-rows-6 gap-4 ">
        <div className="col-span-12 md:col-span-8 md:row-span-2   ">
          <div className="h-full flex justify-center items-center ">
            <div className="h-full w-full   ">
              <BigWeather></BigWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 md:row-span-4 col-start-1 row-start-2 ">
          <div className="h-full w-full ">
            <div className="h-full w-full rounded-priv  bg-card-color ">
              <Navbar></Navbar>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-7 md:row-start-3 ">
          <div className="h-full w-full ">
            <div className="h-full rounded-priv bg-card-color ">
              <AreaWeather></AreaWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-2 col-start-1 md:col-start-9 row-start-9 md:row-start-2 ">
          <div className="h-full w-full ">
            <div className="h-full md:h-[19vh] rounded-priv w-full bg-card-color">
              <HourlyWeather></HourlyWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 row-start-1 ">
          <div className="h-full rounded-priv flex justify-center items-center">
            <img
              className="w-full md:w-auto"
              src="https://s3-alpha-sig.figma.com/img/dd25/1439/1400e4dad877077306c60c7b9240fa6c?Expires=1700438400&Signature=TVd~3QvDGnSu9s0tXlnNUd0CI3ikIKyG34wQjjb9jMfXR~oY-Di2JXVEfasF6-oMKFmhNrntKvsIeXqH3zZHN3U1HD-jg47hrR7ffJ6a1DcKhV5Ah8CJrc0vgYp2CDGcw50cbRAO-UF2OCmp1MKVtqhnY61CB9aOSPXmVR5J-PDE~g3sR9wtOlrjSK~COgo0JQgvsEoevlSqncR6lnB-9eMG5IrXdBupQM1uO~8o5YkFowELGebuOqlQAxmoTrv2kg8bwFQxzFKhrUwZZFU-wyesNGPsWiJqYRqymLciJkm3HhkCl0fBXHLgO7y2D9B0B0CQ8wjYOS3y4xNGcHatrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:row-span-2 col-start-1 md:col-start-3 row-start-11 md:row-start-5  ">
          <div className="h-full w-full ">
            <div className=" h-full w-full rounded-priv  bg-card-color">
              <SliderWeather></SliderWeather>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 md:row-span-3 col-start-1 md:col-start-9 row-start-13 md:row-start-4  ">
          <div className="h-full w-full">
            <div className="h-full rounded-priv w-full bg-card-color  ">
              <CardWeather></CardWeather>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
