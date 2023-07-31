"use client";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";

interface FormData {
  email: string;
}

const resetpass = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setEmail(value);
      setErrors({ ...errors, email: "" });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formData: FormData = {
      email,
    };
    console.log("From Data", formData);

    const newErrors = { email: "" };
    if (!email) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
  };

  return (
    <div className="mb-[180px]">
      <div className="pt-[200px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Enter email to reset password
        </h1>
        <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] items-center">
          <Input
            name="email"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
            error={errors.email}
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
