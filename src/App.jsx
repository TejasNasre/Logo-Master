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
  return (
    <>
      <UpdateStorageContext.Provider
        value={{ updateStorage, setUpdateStorage }}
      >
        <Header />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(index) => setSelectedIndex(index)} />
        </div>
        <div className="h-screen w-full ml-64 flex flex-col md:flex-row fixed">
          <div className="w-[auto] h-screen flex flex-col border shadow-sm p-5 pb-[5rem] overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="flex justify-center items-center w-[50%] h-screen">
            <LogoPreview />
          </div>
        </div>
      </UpdateStorageContext.Provider>
    </>
  );
}
