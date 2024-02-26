import { useCreateUserMutation } from "@/redux/features/userApi";
import Link from "next/link";
import { GiLoveSong } from "react-icons/gi";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Signup = ({ setSignUpOpen }: any) => {
  const [createUser] = useCreateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();

    console.log("register", data);

    await createUser(data);
    setSignUpOpen(false);
  };

  return (
    <div className="w-[400px] h-fit bg-[#3b3b3b] p-10">
      <div className="flex items-center justify-center text-white">
        <GiLoveSong size={20} />
        <span className="text-[18px]">Favget</span>
      </div>
      <p className="text-center text-white font-semibold text-[24px] my-5">
        Sign Up
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col text-white gap-1">
          <label htmlFor="">UserName</label>
          <input
            type="text"
            placeholder="username"
            {...register("username")}
            className="px-6 py-1 bg-black rounded-md"
          />
        </div>
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
          value="Sign up"
          className="px-8 py-[6px] bg-gray-700 text-white rounded-3xl"
        />
      </form>
      <div className="mt-10">
        <span className="text-white text-[12px]">Already have account?</span>{" "}
        <Link className="text-blue-200 text-[12px]" href="/">
          signin
        </Link>
      </div>
    </div>
  );
};

export default Signup;
