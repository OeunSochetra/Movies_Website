import Container from "./Container";
import Description from "./Description";
import Recommend from "./Recommend";
import Sidebar from "./Sidebar";

const ShowCard = () => {
  return (
    <div className="relative">
      <Sidebar></Sidebar>
      <Container>
        <div className="flex items-center justify-center">
          <video controls className="w-[1200px]">
            <source src="/public/Video/video.mp4" />
          </video>
        </div>
        <div className="">
          <Description></Description>
        </div>
        {/* <div className="pt-7">
          <Recommend></Recommend>
        </div> */}
      </Container>
    </div>
  );
};

export default ShowCard;
