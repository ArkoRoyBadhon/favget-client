import Image from "next/image";
import { PiCrownSimpleLight } from "react-icons/pi";

const HomeBanner = () => {
  return (
    <div className="p-10 flex gap-10 text-white h-[300px] w-full bg-blue-400">
      <div className="">
        <div className=" flex gap-5 items-center">
          <PiCrownSimpleLight />
          <p className="">No Ads & Unlock Paid Songs</p>
        </div>
        <h1 className="text-[58px] font-bold">Premium Membership</h1>
        <p className="text-[16px] text-pretty">
          It is a long established fact that a is that it has a more-or-less
          normal distribution of letters, as oppoesed to using 'Content here,
          content here, making it look like readable English
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
      <div className="w-[25%]">
        img
        {/* <Image src={} alt="" height={} width={} /> */}
      </div>
    </div>
  );
};

export default HomeBanner;
