import { BsShop } from "react-icons/bs";
import { CiShop } from "react-icons/ci";
import { LoadingAnimation } from "../global/animation";
import { Wrapper } from "../global/Wrapper.jsx";
import { BtnPrimary, BtnSecondary } from "./ui/Button.jsx";
import HeroImage from "./ui/heroImage";
const Hero = () => {
  return (
    <Wrapper loadingCustom>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <LoadingAnimation>
              <h1 className="max-w-2xl mb-4 text-5xl font-extrabold tracking-tight  xl:leading-[4.2rem] max-lg:leading-[3.7rem]  md:text-6xl xl:text-6xl   ">
                <span className="text-red-200 rounded  bg-red-800/90 p-[0.35rem]   ">
                  {" "}
                  Brighten Your World{" "}
                </span>{" "}
                with Fresh, Handpicked Blooms
              </h1>
              <p className="max-w-2xl mb-6 font-semibold  lg:mb-8 md:text-lg lg:text-lg  text-gray-900">
                Discover the beauty of nature with our exquisite collection of
                flowers for every occasion. From romantic roses to vibrant
                sunflowers, we deliver fresh, seasonal blooms straight to your
                doorstep.
              </p>
              <div className="flex gap-3 max-lg:items-center max-lg:justify-center  max-lg:flex-col">
                <BtnSecondary label={"Shop Now"} icon={<CiShop size={28} />} />{" "}
                <BtnPrimary label={"get free home delivary"} icon={<BsShop size={28} />} />{" "}
              </div>
            </LoadingAnimation>
          </div>
          <div className="  lg:mt-0 lg:col-span-5 lg:flex ">
            <HeroImage />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
