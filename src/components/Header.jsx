import React from "react";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";

export default function Header({ onDownloadClick }) {
  return (
    <>
      <div className="p-4 shadow-sm border flex justify-between items-center">
        {/* <img src="/logo" alt="Logo" /> */}
        <h1>Logo Here</h1>
        <Button className="flex gap-2 items-center" onClick={onDownloadClick}>
          <DownloadIcon className="h-4 w-4" />
          Download
        </Button>
      </div>
    </>
  );
}
