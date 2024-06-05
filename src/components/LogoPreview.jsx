import React, { useEffect, useState } from "react";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { useContext } from "react";
import { icons } from "lucide-react";


export default function LogoPreview() {
  const [storageValue, setStorageValue] = useState(null);
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return (
      <LucidIcon
        size={size}
        color={color}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  return (
    <>
      <div
        className="border shadow-sm w-[400px] h-[400px] outline-dotted outline-gray-300 bg-gray-200"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          className="h-full w-full flex justify-center items-center"
          style={{
            borderRadius: storageValue?.bgRound,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </>
  );
}
