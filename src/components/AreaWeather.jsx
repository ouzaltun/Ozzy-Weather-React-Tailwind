import React from "react";
import Area from "../api/area.json";
import { useEffect, useState } from "react";
function AreaWeather() {
  const [areaItem, setAreaItem] = useState([]);
  useEffect(() => {
    setAreaItem(Area.Area);
  }, []);

  return (
    <div>
      <div className="flex justify-start items-center pl-[30px] pt-4">
        <img
          src="/Heart.png
        "
          alt=""
        />
        <span className="text-[16px]">Activities in your area</span>
      </div>
      <div className="h-full grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center ">
        {areaItem.map((e) => (
          <div className="" key={e.id}>
            <div className="py-2">
              <img
                className=" transition hover:scale-90 w-[120px] md:w-[110px] rounded-[6.811px] border border-[#D9D9D9]"
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
