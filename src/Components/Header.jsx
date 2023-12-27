import logo from "../assets/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const [toggle,setToggle]=useState(false);
  const menu = [
    {
      id: 1,
      name: "HOME",
      icon: HiHome,
    },
    {
      id: 2,
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      id: 3,
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      id: 4,
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      id: 5,
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      id: 6,
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className=" flex justify-between p-5">
      <div className=" flex gap-8 items-center">
        <img
          src={logo}
          alt=""
          className=" w-[80px] object-cover md:w-[112px]"
        />

        <div className=" hidden gap-5 md:flex">
          {menu.map((item) => (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex gap-5 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.id} name={""} Icon={item.icon} />
              )
          )}
          <div className=" md:hidden" onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {/* dropdown */}
            {toggle ? <div className=" absolute mt-4 bg-[#efe0e0] p-3 py-4 px-5 block border-[1px]">
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
                  )
              )}
            </div>:null}
          </div>
        </div>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
        className=" w-[60px] rounded-full"
        alt=""
      />
    </div>
  );
};

export default Header;
