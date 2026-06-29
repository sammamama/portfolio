import { technologies } from "@/data/technologies";

const Technologies = () => {
  return (
    <div className="w-[80%] max-w-none lg:max-w-[400px] md:max-w-[300px] mt-10 rounded-xl bg-transparent/30 p-10 text-lg font-bold h-min">
      Technologies Known
      <div className="flex justify-center items-center flex-wrap gap-x-5">
        {technologies.map(({ title, image }, i) => (
          <div
            key={i}
            className="mt-3 md:p-4 w-min h-min text-sm md:text-base
                      font-mono font-light md:bg-transparent/60 rounded-xl
                      flex justify-center items-center"
          >
            <img src={image} width={20} height={20} className="m-1" alt={title} />
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
