"use client";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";

const resetpass = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setEmail(value);
      setErrors({ ...errors, email: "" });
    } else if (name === "password") {
      setPassword(value);
      setErrors({ ...errors, password: "" });
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
        "Password must be at least 8 characters with letters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
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
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
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
