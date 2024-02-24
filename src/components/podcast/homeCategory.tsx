import { TbPlayerPlayFilled } from "react-icons/tb";

const PodcastCategory = () => {
  return (
    <div className="text-white mt-5 mb-8">
      <div className="grid grid-cols-5 gap-5 mt-6">
        <div className="">
          <div className="relative bg-red-200 rounded-3xl h-[200px]">
            <div className="absolute flex items-center h-full w-full justify-center ">
              <div className="border-4 p-3 rounded-full cursor-pointer">
                <TbPlayerPlayFilled className="" size={30} />
              </div>
            </div>
          </div>
          <p className="text-center mt-2">Music</p>
        </div>
      </div>
    </div>
  );
};

export default PodcastCategory;
