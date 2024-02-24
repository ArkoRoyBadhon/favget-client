"use client";
import { GiLoveSong } from "react-icons/gi";
import { RiHome4Fill } from "react-icons/ri";
import { PiMusicNoteSimpleBold, PiPlaylistLight } from "react-icons/pi";
import { MdSettings } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const pathUrl = usePathname()
  const router = useRouter()
  
  return (
    <div className="sticky w-full text-white bg-gray-600 h-[100vh] px-5 py-10">
      <div className="flex items-center">
        <GiLoveSong size={20} />
        <span className="text-[26px]">Favget</span>
      </div>
      <div className="mt-10 pr-5">
        <div className="relative flex items-center justify-between">
          <p className="text-[18px] font-semibold">Menu</p>
          <div className="absolute w-16 h-[2px] bg-white right-0"></div>
        </div>

        <div className={`flex items-center gap-5 mt-5 cursor-pointer hover:text-green-400 ${pathUrl === "/home" && "text-green-400"}`} onClick={()=> router.push("/home")}>
          <RiHome4Fill size={16} />
          <span className="text-[16px] font-semibold">Home</span>
        </div>
        <div className={`flex items-center gap-5 mt-5 cursor-pointer hover:text-green-400 ${pathUrl === "/podcast" && "text-green-400"}`} onClick={()=> router.push("/podcast")}>
          <PiMusicNoteSimpleBold size={16} />
          <span className="text-[16px] font-semibold">Podcast</span>
        </div>
        <div className={`flex items-center gap-5 mt-5 cursor-pointer hover:text-green-400 ${pathUrl === "/setting" && "text-green-400"}`} onClick={()=> router.push("/setting")}>
          <MdSettings size={16} />
          <span className="text-[16px] font-semibold">Settings</span>
        </div>
        <div className={`flex items-center gap-5 mt-5 cursor-pointer hover:text-green-400 ${pathUrl === "/logout" && "text-green-400"}`}>
          <IoIosLogOut size={16} />
          <span className="text-[16px] font-semibold">Logout</span>
        </div>
      </div>
      <div className="mt-10 pr-5">
        <div className="relative flex items-center justify-between">
          <p className="text-[20px] font-semibold">My Playlist</p>
          <div className="absolute w-8 h-[2px] bg-white right-0"></div>
        </div>

        <div className="flex items-center gap-5 mt-5 cursor-pointer">
          <PiPlaylistLight  size={16} />
          <span className="text-[16px] font-semibold">Playlist #A</span>
        </div>
        <div className="flex items-center gap-5 mt-5 cursor-pointer">
          <PiPlaylistLight  size={16} />
          <span className="text-[16px] font-semibold">Playlist #B</span>
        </div>
        <div className="flex items-center gap-5 mt-5 cursor-pointer">
          <PiPlaylistLight  size={16} />
          <span className="text-[16px] font-semibold">Playlist #C</span>
        </div>
        <div className="flex items-center gap-5 mt-5 cursor-pointer">
          <PiPlaylistLight  size={20} />
          <span className="text-[16px] font-semibold">Add New +</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
