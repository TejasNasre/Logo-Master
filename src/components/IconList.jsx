import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { iconList } from "../constants/icon";
import { icons } from "lucide-react";
import axios from "axios";

export default function IconList({ setSelectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  const [openDialog, setOpenDialog] = useState(false);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return <LucidIcon size={size} color={color} />;
  };

  const [pngIcons, setPngIcons] = useState([]);
  const getPngIcons = () => {
    axios
      .get("https://logoexpress.tubeguruji.com/getIcons.php")
      .then((res) => setPngIcons(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPngIcons();
  }, []);
  return (
    <>
      <div>
        <label htmlFor="icon">Icon</label>
        <div
          className="p-3 cursor-pointer border-2 border-black rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
          onClick={() => setOpenDialog(true)}
        >
          {icon?.includes("png") ? (
            <img
              src={`https://logoexpress.tubeguruji.com/png/${icon}`}
              alt={`${icon}`}
            />
          ) : (
            <Icon name={icon} color={"#000"} size={20} />
          )}
        </div>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pic Your Favorite Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="flex flex-wrap gap-10 overflow-auto h-[400px] p-6">
                    {iconList.map((i, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-black shadow-sm p-3 flex justify-center items-center rounded-sm cursor-pointer"
                        onClick={() => {
                          setSelectedIcon(i);
                          setOpenDialog(false);
                          setIcon(i);
                        }}
                      >
                        <Icon name={i} color={"#000"} size={20} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon">
                  <div className="flex flex-wrap gap-10 overflow-auto h-[400px] p-6">
                    {pngIcons.map((i, idx) => (
                      <div
                        key={idx}
                        className="border-2 border-black shadow-sm p-3 flex justify-center items-center rounded-sm cursor-pointer w-[50px] h-[50px]"
                        onClick={() => {
                          setSelectedIcon(i);
                          setOpenDialog(false);
                          setIcon(i);
                        }}
                      >
                        <img
                          src={`https://logoexpress.tubeguruji.com/png/${i}`}
                          alt={`${i}`}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
