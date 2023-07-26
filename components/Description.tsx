import React from "react";

const Description = () => {
  return (
    <div className="text-white font-[500] text-4xl pt-5">
      <div>
        <h1>Description</h1>
      </div>
      <div className="text-sm pt-6 gap-4 flex">
        <p>2023</p>
        <div className="py-1 px-7 bg-red-600 rounded-md">
          <p className="bg-red-600">Movie</p>
        </div>
      </div>
      <div className="text-sm font-[300]">
        <div className="pt-7 flex justify-between ">
          <p className="flex gap-2 text-[#909296] flex-grow">
            Status <span className="text-white">Completed</span>
          </p>
          <p className="flex gap-2 text-[#909296] flex-grow">
            Country <span className="text-white">Thailand</span>
          </p>
        </div>
        <div className="pt-2 flex text-[#909296]  justify-between">
          <p className="flex gap-2 flex-grow">
            Categories <span className="text-white">Movie</span>
          </p>
          <p className="flex gap-2 text-[#909296] flex-grow">
            Genres <span className="text-white">Comdy</span>
          </p>
        </div>
        <div className="pt-7">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            illo, odio quo nobis adipisci delectus dicta inventore omnis tenetur
            mollitia quas vel recusandae praesentium nihil sapiente, molestias
            expedita. Eius, asperiores.
          </p>
        </div>
      </div>
      <div className="pt-7">
        <h1>Recommended...</h1>
      </div>
    </div>
  );
};

export default Description;
