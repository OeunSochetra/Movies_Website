import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";

const signup = () => {
  return (
    <div className="pt-[160px] mb-[250px] flex flex-col justify-center items-center text-white font-[500] ">
      <h1 className=" sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
        Sign Up your account
      </h1>
      <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] gap-4 flex-col items-center ">
        <Input name="Email" type="text" placeholder="Email Ardess"></Input>
        <Input name="password" type="password" placeholder="Password"></Input>
        <Input
          name="Confirm"
          type="password"
          placeholder="Confirm Password"
        ></Input>
      </div>
      <div className="pt-10">
        <CustomButton title={"Sign Up"} btnType={"button"}></CustomButton>
      </div>
    </div>
  );
};

export default signup;
