"use client";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti";
import SignIn from "./modal/signin";
import Signup from "./modal/signup";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [signinOpen, setSigninOpen] = useState<boolean>(false);
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
  const modalSigninRef = useRef(null);
  const modalSigbupRef = useRef(null);

  const { data: session } = useSession();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (modalSigninRef.current &&
          //@ts-ignore
          !modalSigninRef.current.contains(event.target as Node)) ||
        (modalSigbupRef.current &&
          //@ts-ignore
          !modalSigbupRef.current.contains(event.target as Node))
      ) {
        setSigninOpen(false);
        setSignUpOpen(false);
      }
    };

    if (signinOpen || signUpOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [signinOpen, signUpOpen]);

  return (
    <div className="p-10 flex justify-between items-center relative">
      {signinOpen && (
        <div
          ref={modalSigninRef}
          className="absolute z-20 top-[100px] rounded-sm left-[30%]"
        >
          <SignIn />
        </div>
      )}
      {signUpOpen && (
        <div
          ref={modalSigbupRef}
          className="absolute z-20 top-[100px] rounded-sm left-[30%]"
        >
          <Signup setSignUpOpen={setSignUpOpen} />
        </div>
      )}
      <p className="text-white font-semibold text-[20px]">
        Welcome, <span className="capitalize">{session?.user?.name}</span>
      </p>
      <div className="flex items-center gap-5">
        {session?.user?.email ? (
          <div className="flex items-center gap-5">
            <div className="bg-gray-300 px-2 py-1 rounded-3xl flex items-center gap-2">
              <IoSearchOutline className="text-gray-600" />
              <input
                placeholder="Artist, Music, Album, Etc"
                type="text"
                className="outline-none bg-transparent"
              />
              <TiMicrophone className="text-gray-600" />
            </div>
            <div className="rounded-full bg-white w-10 h-10"></div>
          </div>
        ) : (
          <div className="text-white flex justify-center items-center gap-3">
            <button
              onClick={() => setSigninOpen(!signinOpen)}
              className="px-8 py-[6px] rounded-3xl bg-gray-700"
            >
              Sign In
            </button>

            <button
              onClick={() => setSignUpOpen(!signUpOpen)}
              className="px-8 py-[6px] rounded-3xl bg-gray-700"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
