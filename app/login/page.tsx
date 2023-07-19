"use client";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import Link from "next/link";

// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setEmail(value);
      setErrors({ ...errors, email: "" });
    } else if (name === "password") {
      setPassword(value);
      setErrors({ ...errors, password: "" });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Please enter your password.";
    } else if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters with letters";
    }

    setErrors(newErrors);
  };

  return (
    <div className="mb-[250px]">
      <div className="pt-[160px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Login your account
        </h1>
        <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] gap-4 flex-col items-center">
          <Input
            name="email"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>
        <div className="pt-5">
          <CustomButton
            title={"Login"}
            btnType={"button"}
            onClick={handleSubmit}
          />
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
