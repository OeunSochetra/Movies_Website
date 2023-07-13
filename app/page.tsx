import Hero from "@/components/Hero";
import Home from "@/components/Home";

const Page = () => {
    return (
        <section className="bg-[#1a1b1e] " >
            <div className="flex items-center justify-center" >
            <div className="pt-10 max-w-[1180px] w-full">
                {/* <Home></Home> */}
                <Hero></Hero>
            </div>
            </div>
        </section>
    )
}
export default Page;