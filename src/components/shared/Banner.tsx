import React from "react";

const Banner = () => {
  return (
    <div className="w-7xl mx-auto mt-10 flex justify-between items-center px-10 ">
      <div className="">
        <h3 className="text-xl text-[#C2F800]">WORKOUT LIBRARY</h3>
        <h1 className="text-6xl font-bold mt-5">
          TRAIN WITH INTENT. LOG<br></br> EVERY SET.
        </h1>
        <p className="mt-5">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock <br />
          it into today's plan, and watch the week's work add up.
        </p>
        <button className="bg-[#C2F800] px-5 py-2 rounded-lg mt-5 font-bold">
          BROWSE WORKOUTS
        </button>
      </div>
      <div>
        <img src="/banner.png" className="mt-5"></img>
      </div>
    </div>
  );
};

export default Banner;
