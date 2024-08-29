import Image from "next/image";

import papa from '@/public/papa.png'
import srijan from '@/public/srijan.png'

const Testimonials = () => {
  return (
    <div className="lg:w-[400px] md:w-[90%] w-[300px] h-min 
    bg-neutral-300 mt-10 p-10 overflow-hidden">
      <div className="text-lg font-semibold text-black">Testimonials</div>
      <div className="flex gap-3 lg:flex-col sm:flex-row flex-col 
      justify lg:w-full">
        <div className="flex bg-neutral-200 border-2 
        border-black rounded-xl p-4 flex-col mt-5">
          <div className="flex ">
            <Image
              src={papa}
              alt="Sushil Sharma"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="ml-5 text-neutral-700 text-lg font-semibold">
              Sushil Sharma
              <br />
              <span className="font-thin text-sm">Founder of Sthaptya</span>
            </div>
          </div>
          <div className="text-black mt-3">
            Samridh is a delight to work with. The experince was very smooth. And
            the product was superb
            <br />
            <br />
            Very Punctual.
          </div>
        </div>
        <div className="flex bg-neutral-200 border-2 border-black rounded-xl p-4 flex-col mt-5">
          <div className="flex">
            <Image
              src={srijan}
              alt="Srijan"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div className="ml-5 text-neutral-700 text-lg font-semibold">
              Shri
              <br />
              <span className="font-thin text-sm">Owner of Saanjh Homesays</span>
            </div>
          </div>
          <div className="text-black mt-3">
            Developing a cool website with @sammamm. Dropping it soon.
          </div>
        </div>
      </div>
      </div>
  );
};

export default Testimonials;
