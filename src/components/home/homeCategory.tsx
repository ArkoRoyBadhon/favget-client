import { TbPlayerPlayFilled } from "react-icons/tb";

const HomeCategory = () => {
  return (
    <div className="text-white my-10 ">
      <div className="grid grid-flow-col gap-2">
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center">For You</div>
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center">Popular</div>
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center">Trend</div>
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center">Pop</div>
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center">Edm</div>
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center">More</div>
      </div>
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

export default HomeCategory;
