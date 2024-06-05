import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { useContext } from "react";

export default function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [round, setRound] = useState(storageValue ? storageValue?.bgRound : 0);
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#fff"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRound: round,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [round, padding, color]);
  return (
    <>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center" htmlFor="size">
          Rounded <span>{round} px</span>
        </label>
        <Slider
          defaultValue={[round]}
          max={512}
          step={1}
          onValueChange={(e) => setRound(e[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center" htmlFor="size">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={150}
          step={1}
          onValueChange={(e) => setPadding(e[0])}
        />
      </div>
      <div className="py-2">
        <label
          className="p-2 flex justify-between items-center"
          htmlFor="rotate"
        >
          Icon Color
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </>
  );
}
