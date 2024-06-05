import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Smile } from "lucide-react";
import { iconList } from "../constants/icon";
import { icons } from "lucide-react";

export default function IconList() {
  const [openDialog, setOpenDialog] = useState(false);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return null;
    return <LucidIcon size={size} color={color} />;
  };

  return (
    <>
      <div>
        <label htmlFor="icon">Icon</label>
        <div
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
          onClick={() => setOpenDialog(true)}
        >
          <Smile />
        </div>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pic Your Favorite Icon</DialogTitle>
            <DialogDescription>
              <div>
                {iconList.map((i, idx) => (
                  <div key={idx}>
                    <Icon name={i} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
