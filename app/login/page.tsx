"use client";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import Link from "next/link";
// import { useContext } from "react";
// import { Mycontext } from "../layout";

interface papeError {
  email: string;
  password: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  // const { title, test1 } = useContext(Mycontext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = () => {
    let hasErrors = false;
    const newErrors = { email: "", password: "" };
    if (!email || !emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    hasErrors = true;
    if (!password) {
      newErrors.password = "Please enter password";
    }
    hasErrors = true;
    if (hasErrors) {
      setErrors(newErrors);
    } else {
      console.log("login successful");
    }
  };

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   setEmail(e.currentTarget.value);
  // };

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   console.log("email", email);
  //   console.log("password", password);
  //   if (!email) {
  //     errors.email = "Email is require";
  //   }
  //   if (!password) {
  //     errors.email = "password is require";
  //   }
  //   if (Object.keys(errors).length > 0) {
  //     setErrors(errors);
  //   } else {
  //     setErrors({});
  //   }
  // };

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   console.log("email", email);
  //   if (!email) {
  //     errors.email = "Email is require";
  //     setErrors((prev: any) => ({ ...prev, email: "Email is require" }));
  //   } else {
  //     setErrors({});
  //   }
  // };

  return (
    <form className="mb-[250px]">
      <div className="pt-[160px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Login your account
        </h1>
        <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] gap-4 flex-col items-center">
          <Input
            name="Email"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
        </div>

        <div className="pt-10">
          <CustomButton title={"Login"} btnType={"submit"}></CustomButton>
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
    </form>
  );
};

export default Login;
