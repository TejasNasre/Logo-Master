import React from "react";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Header({ onDownloadClick }) {
  return (
    <>
      <div className="p-4 shadow-sm border-b-2 border-b-black flex justify-between items-center">
        <Link to="">
          <img src={Logo} alt="Logo" width="150px" />
        </Link>
        <Button
          className="flex gap-2 items-center text-[1rem]"
          onClick={onDownloadClick}
        >
          <DownloadIcon className="h-4 w-4" />
          Download
        </Button>
      </div>
    </>
  );
}
