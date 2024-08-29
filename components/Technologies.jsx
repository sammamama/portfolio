import Image from "next/image";

import { technologies } from "@/data/technologies";

const Technologies = () => {
  return (
    <div className="max-w-[200px] lg:max-w-[400px] md:max-w-[300px] mt-10 rounded-xl bg-transparent/30 p-10 text-lg font-bold h-min">
      Technologies Known
      <div className="flex justify-center items-center flex-wrap gap-x-5">
        {technologies.map(({ title, image, index }) => (
          <div
            key={index}
            className="mt-3 md:p-4 w-min h-min text-sm md:text-base
                      font-mono font-light md:bg-transparent/60 rounded-xl 
                      flex justify-center items-center"
          >
            <Image src={image} width={20} className="m-1" alt="TS" />
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
