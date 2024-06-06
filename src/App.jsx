import React, { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext.js";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();

  const handleDownloadClick = () => {
    setDownloadIcon(Date.now());
  };
  return (
    <>
      <UpdateStorageContext.Provider
        value={{ updateStorage, setUpdateStorage }}
      >
        <Header onDownloadClick={handleDownloadClick} />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(index) => setSelectedIndex(index)} />
        </div>
        <div className="h-screen w-[100%] ml-64 flex flex-col md:flex-row fixed">
          <div className="w-[auto] h-screen flex flex-col  shadow-sm p-5 pb-[5rem] overflow-auto border border-r-black scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-black-400">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="flex justify-center items-center w-full md:w-[56%] h-screen pb-[5rem]">
            <LogoPreview downloadTrigger={downloadIcon} />
          </div>
        </div>
      </UpdateStorageContext.Provider>
    </>
  );
}
