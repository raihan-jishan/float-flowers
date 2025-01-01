import { CiTwitter } from "react-icons/ci";
import { TbBellDollar } from "react-icons/tb";

// FeatureCard
export const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 transition-all  hover:bg-rose-50       ">
      <div className="flex items-center justify-center text-primary hover:animate-pulse  ">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-4  ">{title}</h3>
      <p className="text-muted-foreground mt-2 text-start lg:text-start text-gray-400">
        {description}
      </p>
    </div>
  );
};
// flowerCard
export const FlowerCard = ({ imgUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300 ease-in-out  ">
      <img className=" rounded-md" src={imgUrl} alt="img" />

      <div className="px-6 py-4  ">
        {/* text */}
        <div className=" font-semibold text-xl mb-2">Beautiful Rose</div>
        {/* cta */}
        <div className="flex items-center justify-between ">
          <span className="  text-xl text-gray-800  tracking-wider font-bold font-Montserrat">
            $120.00
          </span>
          <button className="bg-black p-4 flex gap-1 rounded-full text-white hover:opacity-90">
            Get Discount <TbBellDollar size={25} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
// review card
export const ReviewCard = ({ name, handle, review, Avatar }) => {
  return (
    <div className="  border-black flex flex-col justify-between rounded-md     bg-emerald-100 p-5 shadow-xl max-w-sm mx-auto mt-24 ">
      <div className="mt-6 flex items-center gap-6 ">
        <div className="h-[100%] w-[50%] border-4 border-l border-t border-r border-black overflow-hidden  rounded-lg      shadow-2xl   ">
          <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
            <img
              alt="Avatar"
              src={Avatar}
              className="inline-block w-[100%] "
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <h2 className="leading-relaxed tracking-wide text-xl text-gray-950">
            {name}
          </h2>
          <p className="text-[1rem] leading-relaxed tracking-wide text-gray-950 flex gap-3">
            <CiTwitter size={25} className="text-primary " /> @{handle}
          </p>
        </div>
      </div>
      <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-950">
        {review}
      </p>
    </div>
  );
};
