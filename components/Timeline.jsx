import { Briefcase, GraduationCap, School } from "lucide-react";
import React from "react";

const Timeline = () => {
  return (
    <div className="mr-5">
      <div
        className="lg:w-[400px] w-full h-min 
              bg-transparent/50 mt-10 rounded-xl p-10 text-lg"
      >
        Timeline
        <div className="flex flex-col justify-center text-sm items-center">
          <div className=" italic">
            <span className="flex justify-center items-center">
              <School className="mr-2" /> DPS School <br />
              (graduated 2022){" "}
            </span>
          </div>
          <div className="h-20 w-1 rounded-full bg-neutral-300"></div>

          <div className="">
            <span className="flex justify-center items-center">
              <GraduationCap className="mr-2" />
              Deakin University <br />
              (2022 - 2026)
            </span>
          </div>
          <div className="h-20 w-1 rounded-full bg-neutral-300"></div>

          <div className="">
            <span className="flex justify-center items-center italic">
              <Briefcase className="mr-2" />
              Sushil Sharma Associates <br />
              (2023 - present) <br />
              (Frontend Developer)
            </span>
          </div>
          <div className="h-20 w-1 rounded-full bg-neutral-300"></div>

          <div className="">
            <span className="flex justify-center items-center italic">
              <Briefcase className="mr-2" />
              Saanjh
              <br />
              (2024 - present) <br />
              (Fullstack Developer)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
