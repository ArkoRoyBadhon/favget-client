"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { PiCrownSimpleLight } from "react-icons/pi";
import guiterImg from "@/assets/guiter.jpg";
import bannerimg from '@/assets/man_thumb.png'

const HomeBanner = () => {
  const { data: session } = useSession();

  return (
    <div className="">
      {session?.user?.email ? (
        <>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(7,181,164,1) 2%, rgba(5,95,109,1) 100%)",
            }}
            className="p-10 flex gap-10 text-white h-[300px] w-full overflow-hidden"
          >
            <div className="">
              <div className=" flex gap-5 items-center">
                <PiCrownSimpleLight />
                <p className="">No Ads & Unlock Paid Songs</p>
              </div>
              <h1 className="text-[58px] font-bold">Premium Membership</h1>
              <p className="text-[16px] text-pretty">
                It is a long established fact that a is that it has a
                more-or-less normal distribution of letters, as oppoesed to
                using 'Content here, content here, making it look like readable
                English
              </p>

              <div className="flex gap-5 mt-10">
                <button className="px-8 py-2 rounded-3xl bg-black">
                  Upgrade Now
                </button>
                <button className="px-8 py-2 rounded-3xl bg-blue-900">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-[35%] relative">
              {/* img */}
              <Image className="absolute bottom-[-40px]" src={bannerimg} alt="img" height={500} width={500} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" text-white h-[300px] w-full relative">
            <Image
              className="h-full w-full"
              src={guiterImg}
              alt="Img"
              height={500}
              width={500}
            />
            <div
              style={{
                background:
                  "linear-gradient(90deg, rgba(7,181,164,1) 2%, rgba(5,95,109,1) 100%)",
              }}
              className="absolute top-0 left-0 h-[300px] opacity-40 w-full z-10"
            ></div>
            <div className="absolute top-0 left-0 h-[300px] p-10 w-full z-10">
              <div className="">
                <p className="">Top play music station</p>
              </div>
              <h1 className="text-[32px] py-1">
                The Dark Side of Music: Unveiling Its Negative Effects
              </h1>
              <p className="text-[16px] w-[80%] text-pretty">
                It is a long established fact that a is that it has a
                more-or-less normal distribution of letters, as oppoesed to
                using 'Content here, content here, making it look like readable
                English
              </p>

              <div className=" mt-10">
                <button className="px-8 py-2 rounded-3xl bg-black">
                  For You
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeBanner;
