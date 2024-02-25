"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SettingBody = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user?.email) {
    // console.log(session?.user?.email);
    router.push("/");
  }

  return (
    <div className="text-white px-10">
      <h3 className="ml-1">User Profile</h3>
      <div className="ml-4 mt-5">
        <p className="capitalize">Name: {session?.user?.name}</p>
        <p className="">Email: {session?.user?.email}</p>
      </div>
    </div>
  );
};

export default SettingBody;
