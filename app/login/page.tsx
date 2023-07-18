"use client";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import Link from "next/link";
// import { useContext } from "react";
// import { Mycontext } from "../layout";

const Login = () => {
  // const { title, test1 } = useContext(Mycontext);

  return (
    <div className="mb-[250px]">
      <div className="pt-[160px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Login your account
        </h1>
        {/* <p>{title}</p>
        <p>{test1}</p> */}
        <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] gap-4 flex-col items-center">
          <Input name="Email" type="text" placeholder="Email Address" />
          <Input name="password" type="password" placeholder="Password" />
        </div>
        <div className="pt-10">
          <CustomButton title={"Login"} btnType={"button"}></CustomButton>
        </div>
        <p className="flex gap-2 pt-5">
          <Link href={"/resetpass"}>
            <span>Forget Password</span>
          </Link>
          <span> | </span>
          <Link href={"/signup"}>
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
