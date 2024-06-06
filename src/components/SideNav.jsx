import { SendToBack, ShieldPlus, View } from "lucide-react";
import React, { useState } from "react";

export default function SideNav({ selectedIndex }) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: <View />,
    },
    {
      id: 2,
      name: "Background",
      icon: <SendToBack />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="border-r-2 shadow-sm border-black h-screen p-3">
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-3 text-lg px-7 my-2 cursor-pointer flex rounded-full gap-2 items-center text-black hover:text-white hover:bg-primary ${
              activeIndex == index && "rounded-full border-2 border-black"
            }`}
            key={index}
          >
            {menu.icon}
            {menu.name}
          </h2>
        ))}
      </div>
    </>
  );
}
