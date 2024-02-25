"use client";
import { useSession } from "next-auth/react";
import PodcastCategory from "./homeCategory";
import { useRouter } from "next/navigation";

const PodcastBody = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user?.email) {
    router.push("/");
  }

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
