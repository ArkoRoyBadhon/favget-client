"use client";
import Image from "next/image";
import fakePodcasts from "../FakeData/fakepodcast";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const PodcastDetail = ({ id }: { id: string }) => {
  const filterData = fakePodcasts.filter((item) => item.id === parseInt(id));
  const router = useRouter();

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
      <div className="h-fit">
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

              <div className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
                in! Magni nulla aliquam veritatis explicabo totam laudantium
                pariatur odit id neque. Corporis sunt cumque rerum at officia
                fugiat mollitia saepe, inventore assumenda, harum quos, fugit
                eius nobis! Iusto natus neque explicabo fuga odit, tempora iste
                dicta tempore reprehenderit illo aspernatur pariatur nobis quos
                perspiciatis assume praesentium ea aspernatur id voluptate
                tenetur officia soluta, illum minima, repudiandae nam ipsa.
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[150px]">
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center w-40 text-white font-semibold cursor-pointer">
          Popular
        </div>
        <div className="grid grid-cols-5 gap-5 mt-5">
          {fakePodcasts?.map((item) => {
            return (
              <div key={item?.id} className="">
                <div className="relative rounded-3xl h-[200px]">
                  <Image
                    className="h-full w-full"
                    src={item?.coverImage}
                    alt="img"
                    width={500}
                    height={500}
                  />
                  <div className="absolute top-0 flex items-center h-full w-full justify-center ">
                    <div
                      onClick={() => router.push(`/podcast/${item.id}`)}
                      className="border-4 p-3 rounded-full cursor-pointer"
                    >
                      <TbPlayerPlayFilled className="" size={30} />
                    </div>
                  </div>
                </div>
                <p className="text-center mt-2">Music</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
