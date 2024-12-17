import { GiCottonFlower } from "react-icons/gi";

const Brand = () => {
  return (
    <a
      href=""
      className="flex items-center space-x-2  shadow-md shadow-red-100  rtl:space-x-reverse"
    >
      <GiCottonFlower size={32} className="text-red-700" />
      <span className="self-center text-3xl tracking-wider font-bold   max-lg:text-[1.2rem]">
        floatFlowers
      </span>
    </a>
  );
};

export default Brand;
