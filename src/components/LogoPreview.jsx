import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { useContext } from "react";
import { icons } from "lucide-react";

export default function LogoPreview({ downloadTrigger }) {
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

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (downloadTrigger && imageLoaded) {
      downloadPngLogo();
    }
  }, [downloadTrigger, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const downloadPngLogo = () => {
    const downloadLogo = document.getElementById("downloadLogo");
    html2canvas(downloadLogo, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = `${storageValue?.icon}.png`;
      downloadLink.click();
    });
  };

  return (
    <>
      <div
        className="border shadow-sm w-[400px] h-[400px] outline-dotted outline-black-300 bg-transpraent"
        style={{
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          id="downloadLogo"
          className="h-full w-full flex justify-center items-center"
          style={{
            borderRadius: storageValue?.bgRound,
            background: storageValue?.bgColor,
          }}
        >
          {storageValue?.icon?.includes("png") ? (
            <img
              onLoad={handleImageLoad}
              src={`https://logoexpress.tubeguruji.com/png/${storageValue?.icon}`}
              alt={`${storageValue?.icon}`}
              style={{
                width: storageValue?.iconSize,
                transform: `rotate(${storageValue?.iconRotate}deg)`,
                backgroundColor: storageValue?.iconBgColor,
              }}
            />
          ) : (
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          )}
        </div>
      </div>
    </>
  );
}
