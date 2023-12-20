import React from "react";
import Area from "../api/area.json";
import { useEffect, useState } from "react";
function AreaWeather() {
  const [areaItem, setAreaItem] = useState([]);
  useEffect(() => {
    setAreaItem(Area.Area);
  }, []); // Use effect ve usestate ile bilgilerin jsondan alınması

  return (
    <div>
      <div className="flex justify-start gap-x-3 items-center pt-4 pl-4 pb-2 ">
        <img
          className="w-[25px] h-[28px]"
          src="/Heart.png
        "
          alt=""
        />
        <span className="text-[20px]">Activities in your area</span>
      </div>
      {/* Hava durumu bilgilerinin gösterildiği alan */}
      <div className="h-full grid grid-cols-2 md:grid-cols-4 justify-items-center items-center ">
        {areaItem.map((e) => (
          <div className="" key={e.id}>
            <div className="py-2 ">
              <img
                className=" transition hover:scale-95 w-[120px] md:w-[90px] xl:w-[120px] rounded-[6.811px] border border-[#D9D9D9]"
                src={e.url}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AreaWeather;
