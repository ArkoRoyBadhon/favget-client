'use client'
import { TbPlayerPlayFilled } from "react-icons/tb";
import fakePodcasts from "../FakeData/fakepodcast";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PodcastCategory = () => {
  const router = useRouter();
  return (
    <div className="text-white mt-5 mb-8">
      <div className="grid grid-cols-5 gap-5 mt-6">
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
  );
};

export default PodcastCategory;
