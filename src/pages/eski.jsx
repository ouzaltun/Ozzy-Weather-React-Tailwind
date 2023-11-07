import React from "react";

function eski() {
  return (
    <div>
      <div className="bg-green-500 h-[100vh] flex flex-col items-center md:flex-row-reverse justify-center md:justify-between w-full">
        <div className="flex flex-col md:flex-row-reverse container mx-auto  md:mr-[38px] md:ml-[60px]">
          <div className=" flex flex-col md:items-center gap-y-[30px] ml-[34px] md:mt-[24px] md:mb-[30px]">
            <div className="h-[62px] w-[275px] flex items-center justify-center bg-blue-500">
              logo
            </div>
            <div className="h-[19vh] w-[36vw] flex items-center justify-center bg-slate-500">
              <HourlyWeather></HourlyWeather>
            </div>
            <div className="h-[62vh] w-[36vw]  bg-slate-500">
              <CardWeather></CardWeather>
            </div>
          </div>
          <div className="">
            <div className="md:mt-[24px] md:ml-[65px] w-[57vw] h-[24vh] flex justify-center items-center  bg-orange-300">
              <BigWeather></BigWeather>
            </div>
            <div className="mx-auto flex flex-col md:flex-row bg-yellow-400 md:mt-[63px] md:ml-[36px]  justify-between items-center">
              <div className=" h-[62vh] w-[10vw] bg-amber-800 ">
                <Navbar></Navbar>
              </div>
              <div className="flex flex-col gap-y-[20px]">
                <div className="h-[32vh] bg-lime-700 w-[48vw]">
                  <AreaWeather></AreaWeather>
                </div>
                <div className="h-[28vh] bg-green-400 w-[48vw]">
                  <SliderWeather></SliderWeather>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eski;
