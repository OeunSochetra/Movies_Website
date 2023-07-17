import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";

const Login = () => {
  return (
    <div className="mb-[300px]">
      <div className="pt-[160px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Login your account
        </h1>
        <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] gap-4 flex-col items-center">
          <Input name="Email" type="text" placeholder="Email Address" />
          <Input name="password" type="password" placeholder="Password" />
        </div>
        <div className="pt-10">
          <CustomButton title={"Login"} btnType={"button"}></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
