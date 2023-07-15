import Input from "@/components/Input";

const Login = () => {
  return (
    <div className="pt-[160px] flex flex-col justify-center items-center text-white font-[500]  ">
      <h1 className=" sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
        Sign Up your account
      </h1>
      <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] gap-4 flex-col items-center ">
        <Input name="Email" type="text" placeholder="Email Ardess"></Input>
        <Input name="password" type="password" placeholder="Password"></Input>
      </div>
    </div>
  );
};

export default Login;
