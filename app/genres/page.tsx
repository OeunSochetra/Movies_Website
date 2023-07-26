import GenresDetail from "@/components/GenresDetail";

const genres = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/cover.genre.jpg"
          alt="cover"
          className="w-[500px] h-[150px] sm:w-auto sm:h-auto sm:max-w-full sm:max-h-full opacity-20  "
        />

        <div
          className="absolute top-[50%] font-[500] left-[7%] transform -translate-y-1/2 
        "
        >
          <h1 className="text-xl sm:text-5xl text-white">Genres</h1>
          <p className="text-white pt-1 font-[200] text-[10px] sm:text-[20px]">
            Are you a romance or comedy movie person? Find variety of movie or
            drama genres
          </p>
          <p className="text-white pt-1 font-[200] text-[10px] sm:text-[20px]">
            Action, Romance, Comedy, Supernatural, Mystery, Business,
            Historical... etc.
          </p>
        </div>
      </div>
      <GenresDetail></GenresDetail>
    </div>
  );
};

export default genres;
