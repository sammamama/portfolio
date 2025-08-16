import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-white mx-20 mt-10">
      (click on top right button to watch in full screen)
      <div className="relative pb-[53.09734513274337%] h-0;">
        <iframe
          src="https://www.loom.com/embed/55a99ee687c942f09313367f77176000?sid=8bb84fab-f3bb-4e4b-a9e0-13145d98eb0e"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          className="absolute top-0 left-0 w-[100%] h-[100%]"
        ></iframe>
      </div>
      <div className="flex m-3 gap-3 text-sm">
        <Link href={"/"} className=" p-3 md:p-5 border" target="_blank">
          Look at porfolio
        </Link>
        <Link
          href={"https://cal.com/samridh-sharma-byavvq/30min"}
          target="_blank"
          className=" p-3 md:p-5 text-center border rounded-lg bg-neutral-700 hover:bg-neutral-900 transition text-white"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
};

export default page;
