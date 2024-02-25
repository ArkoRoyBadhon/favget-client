"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GiLoveSong } from "react-icons/gi";

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();

    // console.log(data);
    const res = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      // redirect: false,
    });

    // console.log("credential", res);
  };

  return (
    <div className="w-[400px] h-fit bg-[#3b3b3b] p-10">
      <div className="flex items-center justify-center text-white">
        <GiLoveSong size={20} />
        <span className="text-[18px]">Favget</span>
      </div>
      <p className="text-center text-white font-semibold text-[24px] my-5">
        Sign In
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col text-white gap-1">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("email")}
            className="px-6 py-1 bg-black rounded-md"
          />
        </div>
        <div className="flex flex-col my-8 text-white gap-1">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
            className="px-6 py-1 bg-black rounded-md"
          />
        </div>
        <input
          type="submit"
          value="Sign in"
          className="px-8 py-[6px] bg-gray-700 text-white rounded-3xl"
        />
      </form>
      <div className="mt-10">
        <span className="text-white text-[12px]">
          Don't have account? Create an account
        </span>{" "}
        <Link className="text-blue-200 text-[12px]" href="/">
          signup
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
