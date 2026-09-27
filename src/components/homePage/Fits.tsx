import React from "react";
import Fit from "./Fit";
import type { IFits } from "@/types/fitTypes";

const getFits = async () => {
  const res = await fetch("http://localhost:3000/fitLogData.json");
  const data = await res.json();
  return data;
};

const Fits = async () => {
  const allFits = await getFits();

  return (
    <div className="w-7xl mx-auto">
      <div className="my-10">
        <h2 className="text-3xl font-bold">THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>
      <div className="grid grid-cols-3 gap-5 bg-base-200">
        {allFits.map((fit: IFits) => {
          return <Fit key={fit.id} fit={fit}></Fit>;
        })}
      </div>
    </div>
  );
};

export default Fits;
