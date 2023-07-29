import ViewAll from "@/components/ViewAll";
import Mypage from "@/components/Mypage";
import Container from "@/components/Container";

const Page = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="pt-10 max-w-[1180px] w-full">
          <Mypage></Mypage>
        </div>
      </div>
    </section>
  );
};
export default Page;
