import { GrContactInfo } from "react-icons/gr";
import { LuBadgeDollarSign, LuFlower2 } from "react-icons/lu";
import { Wrapper } from "../global/Wrapper";
import { FeatureCard } from "./ui/card";

const Features = () => {
  return (
    <Wrapper customMargin customBg>
      {/* leaf image */}
      <div className="flex -mt-28 max-lg:-mt-8">
        <img
          src="https://cdn.shopify.com/s/files/1/0593/5087/6299/files/Natural_Ingredient-03.png?v=1728371914"
          alt="404 image was not found!"
          className="  -rotate-12  mix-blend-multiply   w-[10%] max-lg:w-[20%]"
        />
      </div>
      <div className="flex flex-col items-center justify-center   w-full py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0  bg-white rounded-xl  ">
          <FeatureCard
            title={"24/7 Instant Ordering & Delivery"}
            icon={<GrContactInfo size={30} />}
            description={
              "Why It’s Important: Customers can order flowers at any time—whether it's 2 AM, during a busy lunch hour, or at the last minute for an emergency."
            }
          />
          <FeatureCard
            title={"Cheap price and free delivary"}
            icon={<LuBadgeDollarSign size={30} />}
            description={
              "we believe beautiful blooms should be affordable for everyone. Whether it's for a special occasion or just to brighten someone's day, we offer fresh, high-quality flowers at unbeatable prices. Plus, enjoy FREE delivery on all orders—big or small—whenever you need them, day or night."
            }
          />
          <FeatureCard
            title={"Allways fresh and hygienic  flower"}
            icon={<LuFlower2 size={30} />}
            description={
              "we take pride in delivering fresh and hygienic flowers every time. Our blooms are carefully sourced, handled with care, and kept in optimal conditions to ensure they reach you looking their best and lasting longer. With us, freshness and cleanliness come standard—ensuring your floral gifts are not only beautiful but also safe and healthy."
            }
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
