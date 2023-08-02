"use client";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";
import Link from "next/link";

// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  email: string;
  password: string;
}
interface FormError {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState<FormError>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setData({ ...formData, [name]: value });
    setErrors({ ...error, [name]: undefined });
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState({ email: "", password: "" });

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const { name, value } = e.currentTarget;
  //   if (name === "email") {
  //     setEmail(value);
  //     setErrors({ ...errors, email: "" });
  //   } else if (name === "password") {
  //     setPassword(value);
  //     setErrors({ ...errors, password: "" });
  //   }
  // };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const validationErrors: FormError = {
      email: "",
      password: "",
    };

    console.log("Form Data", formData);

    if (!formData.email) {
      validationErrors.email = "Please enter your email.";
    } else if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      validationErrors.password = "Please enter your password.";
    } else if (
      formData.password.length < 8 ||
      !/\d/.test(formData.password) ||
      !/[a-zA-Z]/.test(formData.password)
    ) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    setErrors(validationErrors);
  };

  return (
    <div className="mb-[140px]">
      <div className="pt-[160px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Login your account
        </h1>
        <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] gap-4 flex-col items-center">
          <Input
            name="email"
            type="text"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={error.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={error.password}
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
