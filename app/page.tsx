import Hero from "@/components/Hero";

import Mypage from "@/components/Mypage";

const Page = () => {
  return (
    <section className="bg-[#1a1b1e] ">
      <div className="flex items-center justify-center">
        <div className="pt-10 max-w-[1180px] w-full">
          <Hero></Hero>
          <Mypage></Mypage>
        </div>
      </div>
    </section>
  );
};
export default Page;
