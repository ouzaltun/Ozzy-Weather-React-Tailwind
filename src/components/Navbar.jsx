import React from "react";
import { useEffect, useState } from "react";
import item from "../api/navbar.json"; //Menu elemanları için oluşturulan json

function Navbar() {
  // Use effect ve usestate ile bilgilerin kendi oluşturduğum jsondan alınması
  const [navItem, setNavItem] = useState([]);
  useEffect(() => {
    setNavItem(item.Navbar);
  }, []);

  return (
    <div className="h-[100%] flex flex-col justify-center items-center transition-all py-4 md:py-0  ">
      {/* Hava durumu bölümü */}
      <div className="flex flex-col justify-center items-center hover:scale-95 cursor-pointer">
        <a href="https://www.linkedin.com/in/altunoguzhan/" target="_blank">
          {" "}
          <img
            className="w-[220px] md:w-[120px] lg:w-[180px]"
            src="logo2.png"
            alt=""
          />
        </a>
      </div>
      <div className="h-[2px] mt-2 bg-nav-color w-[60%]"></div>
      <div className="flex flex-row md:flex-col md:mt-4 gap-x-10 mt-8 gap-y-2 md:gap-y-4  justify-center items-center text-nav-color ">
        {/* Diğer menü öğeleri */}
        {navItem.map((e, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center transition-all hover:scale-95 cursor-pointer "
          >
            <img width={34} height={34} src={e.url} alt="" />
            <div>{e.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
