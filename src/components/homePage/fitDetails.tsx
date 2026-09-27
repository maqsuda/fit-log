import type { IFits } from "@/types/fitTypes";
import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

interface IFitProps {
  fit: IFits;
}

const fitDetails = ({ fit }: IFitProps) => {
  const {
    image,
    rating,
    caloriesBurned,
    duration,
    description,
    equipment,
    name,
    muscleGroups,
  } = fit;
  return (
    <div className=" bg-base-100 shadow-sm">
      <Image src={image} width={300} height={300} alt="image" />
      <div className="card-body">
        <div className="flex justify-baseline gap-2 font-bold uppercase">
          {muscleGroups.map((item, ind) => (
            <div key={ind} className="rounded-2xl bg-[#C2F800] px-4 py-1 ">
              {item}
            </div>
          ))}
        </div>

        <h2 className="card-title uppercase font-bold">{name}</h2>
        <p>{description}</p>
        <p>{equipment}</p>
        <hr className="text-gray-300" />

        <div className="flex justify-baseline items-center gap-4">
          <div className="flex justify-baseline items-center gap-2">
            <IoMdTime />
            <p>{duration} min</p>
          </div>
          <div className="flex justify-baseline items-center gap-2">
            <FaFireFlameCurved />
            <p>{caloriesBurned} kcal</p>
          </div>
          <div className="flex justify-baseline items-center gap-2">
            <CiStar />
            <p>{rating} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fitDetails;
