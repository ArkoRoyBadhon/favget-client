"use client";
import {
  useGetUserMutation,
  useUpdateUserMutation,
} from "@/redux/features/userApi";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const SubscriptionMain = () => {
  const stripePublicKey: any = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
  const { data: session } = useSession();
  const [getUser, { data: UserData, isSuccess }] = useGetUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const makePayment = async () => {
    const stripe = await loadStripe(stripePublicKey);
    console.log(stripe);
    
    // if (stripe) {
    //   await updateUser({ email: session?.user?.email });
    // }
  };

  if (isSuccess) {
    console.log(UserData);
  }
  const funCall = async () => {
    await getUser({ email: session?.user?.email });
  };

  useEffect(() => {
    funCall();
  }, [session]);

  return (
    <div className="px-10 text-white">
      <div className="w-[80%] h-fit p-10 border rounded-sm">
        <p className="text-[32px] font-semibold">
          Upgrade Your Current Package
        </p>
        <div className="mt-8 mb-5">
          Currently you are using{" "}
          <span className="text-red-400">
            {UserData?.data?.package === "premium"
              ? "Premium Package"
              : "Free Package"}
          </span>
        </div>
        <p className="">Price: 50 $</p>
        <div className="mt-5">
          <p className="text-[20px]">Features</p>
          <p className="">- Ad Free Experience</p>
          <p className="">- Thousands of new music are available</p>
          <p className="">- Make Offline any music</p>
        </div>
        <div className="mt-5">
          <p className="text-[20px]">Validity</p>
          <p className="">- 12months</p>
        </div>
        <input type="hidden" name="lookup_key" value="50" />
        {UserData?.data?.package === "premium" ? (
          <button className="px-12 py-2 mt-10 bg-gray-600 rounded-3xl">
            Paid
          </button>
        ) : (
          <button
            onClick={() => makePayment()}
            className="px-12 py-2 mt-10 bg-[#3b3b3b] rounded-3xl"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionMain;
