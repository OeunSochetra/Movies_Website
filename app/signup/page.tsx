"use client";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
interface FormError {
  email: string;
  password: string;
  confirmPassword: string;
}

const resetpass = () => {
  const [formData, setDate] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setErrors] = useState<FormError>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setDate({ ...formData, [name]: value });
    setErrors({ ...error, [name]: undefined });
  };

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const { name, value } = e.currentTarget;
  //   if (name === "email") {
  //     setEmail(value);
  //     setErrors({ ...errors, email: "" });
  //   } else if (name === "password") {
  //     setPassword(value);
  //     setErrors({ ...errors, password: "" });
  //   } else if (name === "confirmPassword") {
  //     setConfirmPassword(value);
  //     setErrors({ ...errors, confirmPassword: "" });
  //   }
  //};

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const validationErrors: FormError = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    console.log("Form Data", formData);

    if (validationErrors.email) {
      formData.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      validationErrors.password = "Please enter your password.";
    } else if (
      formData.password.length < 8 ||
      !/\d/.test(formData.password)
      // !/[a-zA-Z]/.test(password)
    ) {
      validationErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);
  };

  return (
    <div className="mb-[70px]">
      <div className="pt-[200px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Enter email and password to reset password
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
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={error.confirmPassword}
          />
        </div>
        <div className="pt-10">
          <CustomButton
            title={"Send"}
            btnType={"button"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default resetpass;
