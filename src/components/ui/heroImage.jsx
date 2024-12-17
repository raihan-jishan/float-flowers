import { motion } from "framer-motion";
const HeroImage = () => {
  return (
    <motion.dev
      initial={{ y: -300, opacity: 0 }}
      animate={{ opacity: 1, fontSize: "3rem", x: 20, y: -10 }}
      className="flex-col"
    >
      <img
        src="https://t3.ftcdn.net/jpg/07/63/64/72/360_F_763647249_va3PtW1RMChjHUX899B6H09yjo4yFkde.webp"
        className=""
        alt="mockup"
      />
      {/* secondary image */}

      <div className="flex max-lg:flex-col">
        <img
          src="https://t3.ftcdn.net/jpg/08/02/73/14/240_F_802731490_p7JDuX3kax6tqrcRyCEfk4qP6zPKg8q3.jpg"
          alt="mockup"
          className="-mt-20   mix-blend-multiply  max-lg:w-[70%]    "
        />
        <img
          src="https://t4.ftcdn.net/jpg/05/80/27/25/240_F_580272559_YFm5iUgiF9b6Z7B9VzrEVCvds4dcBbh4.jpg"
          alt="mockup"
          className="-mt-20 rotate-45   mix-blend-multiply max-lg:rotate-180 max-lg:-mt-15 max-lg:w-[40%]   "
        />
      </div>
    </motion.dev>
  );
};

export default HeroImage;
