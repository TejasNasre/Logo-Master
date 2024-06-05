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
    {
      id: 3,
      name: "Upgrade",
      icon: <ShieldPlus />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="border shadow-sm h-screen">
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-primary hover-text-white flex gap-2 items-center ${
              activeIndex == index && "bg-primary text-white"
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
