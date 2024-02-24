import PodcastCategory from "./homeCategory";

const PodcastBody = () => {
  return (
    <div className="px-10">
      <div className="">
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center w-40 text-white font-semibold cursor-pointer">
          For you
        </div>
        <PodcastCategory />
      </div>
      <div className="">
        <div className="rounded-3xl bg-[#3B3B3B] py-2 text-center w-40 text-white font-semibold cursor-pointer">
          Popular
        </div>
        <PodcastCategory />
      </div>
    </div>
  );
};

export default PodcastBody;
