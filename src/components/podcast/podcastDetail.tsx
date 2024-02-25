"use client";
import Image from "next/image";
import fakePodcasts from "../FakeData/fakepodcast";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

const PodcastDetail = ({ id }: { id: string }) => {
  const filterData = fakePodcasts.filter((item) => item.id === parseInt(id));

  const [play, setPlay] = useState(false);
  const oceanRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function toggleAudio(): void {
    if (play) {
      oceanRef.current?.pause();
      setPlay(false);
    } else {
      void oceanRef.current?.play();
      setPlay(true);
    }
  }

  useEffect(() => {
    const audioElement = oceanRef.current;

    const handleTimeUpdate = () => {
      //@ts-ignore
      setCurrentTime(audioElement.currentTime);
      //@ts-ignore
      setDuration(audioElement.duration);
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  function formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const progressBarWidth = (currentTime / duration) * 100;

  return (
    <div className="px-10">
      {filterData.map((item) => {
        return (
          <div className="relative h-[300px]">
            <Image
              className="w-full h-full"
              src={item?.coverImage}
              alt="img"
              width={500}
              height={500}
            />
            <div className="absolute bg-black w-full h-full top-0 left-0 opacity-35"></div>
            <div className="absolute w-full h-fit top-0 left-0 text-white px-10 pt-6">
              {item?.title}
            </div>
            <div className="absolute top-0 flex items-center h-full w-full justify-center">
              <div
                onClick={toggleAudio}
                className="border-4 p-3 rounded-full cursor-pointer text-white"
              >
                {/* <TbPlayerPlayFilled className="" size={30} /> */}
                {play ? (
                  <TbPlayerPauseFilled size={30} />
                ) : (
                  <TbPlayerPlayFilled size={30} />
                )}
              </div>
            </div>
            <div className="absolute w-full h-[5px] text-white bottom-14 flex justify-center">
              <div className={`border-b border-gray-400 w-[400px]`}>
                <div
                  className={`h-full bg-red-300`}
                    style={{ width: `${progressBarWidth}%` }}
                ></div>
              </div>
            </div>
            <audio ref={oceanRef} loop src={"/kotha.mp3"} />
          </div>
        );
      })}
    </div>
  );
};

export default PodcastDetail;
