import React from "react";
import BigWeather from "../components/BigWeather";
import HourlyWeather from "../components/HourlyWeather";
import Navbar from "../components/Navbar";
import AreaWeather from "../components/AreaWeather";
import SliderWeather from "../components/SliderWeather";
import CardWeather from "../components/CardWeather";

// Ana sayfa
function Home() {
  return (
    // Arka plan resmi buradan verildi
    <div className="md:h-screen w-full bg-mainImage bg-cover flex justify-center transition-all items-center">
      <div className="grid grid-cols-12 gap-6 md:gap-4 w-[90%] ">
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
            <img
              className=" "
              src="https://s3-alpha-sig.figma.com/img/dd25/1439/1400e4dad877077306c60c7b9240fa6c?Expires=1700438400&Signature=TVd~3QvDGnSu9s0tXlnNUd0CI3ikIKyG34wQjjb9jMfXR~oY-Di2JXVEfasF6-oMKFmhNrntKvsIeXqH3zZHN3U1HD-jg47hrR7ffJ6a1DcKhV5Ah8CJrc0vgYp2CDGcw50cbRAO-UF2OCmp1MKVtqhnY61CB9aOSPXmVR5J-PDE~g3sR9wtOlrjSK~COgo0JQgvsEoevlSqncR6lnB-9eMG5IrXdBupQM1uO~8o5YkFowELGebuOqlQAxmoTrv2kg8bwFQxzFKhrUwZZFU-wyesNGPsWiJqYRqymLciJkm3HhkCl0fBXHLgO7y2D9B0B0CQ8wjYOS3y4xNGcHatrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
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
