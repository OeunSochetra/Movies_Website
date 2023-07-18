import CustomButton from "@/components/CustomButton";
import Input from "@/components/Input";

const resetpass = () => {
  return (
    <div className="mb-[300px]">
      <div className="pt-[200px] flex flex-col justify-center items-center text-white font-[500]">
        <h1 className="sm:text-[20px] md:text-[22px] lg:text-[24] xl:text-[27px]">
          Enter email to reset password
        </h1>
        {/* <p>{title}</p>
      <p>{test1}</p> */}
        <div className="pt-8 flex sm:w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] items-center">
          <Input name="Email" type="text" placeholder="Email Address" />
        </div>
        <div className="pt-10">
          <CustomButton title={"Send"} btnType={"button"}></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default resetpass;
