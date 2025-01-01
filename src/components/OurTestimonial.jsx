import { FiDollarSign } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { LuCalendarFold } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

const OurTestimonial = () => {
  return (
     <div className="  text-gray-50  p-12 mt-6 bg-[url('https://img.freepik.com/free-vector/tropical-paper-palm-leaves-frame-green_23-2148274354.jpg?semt=ais_hybrid')] bg-cover bg-center relative  brightness-75  ">
      <div className="flex items-center justify-between m-5 max-lg:flex-col max-lg:gap-5">
        <div>
          <h1 className="text-3xl font-semibold flex gap-1">
            <FiDollarSign size={30} className="text-gray-900" /> 800Mn+
          </h1>
          <h4>transactional values</h4>
          <span>from sale</span>
        </div>
        <div>
          <h1 className="text-3xl font-semibold flex gap-2">
            <TbTruckDelivery size={40} className="text-gray-900" /> 400+
          </h1>
          <h4>Product delivered</h4>
          <span>successfully</span>
        </div>
        <div>
          <h1 className="text-3xl font-semibold flex gap-1 ">
            <LuCalendarFold size={35} className="text-gray-900" /> 10+
          </h1>
          <h4>years of expreince</h4>
          <span>70+ cities</span>
        </div>
        <div>
          <h1 className="text-3xl font-semibold  flex gap-1  ">
            <IoPeopleOutline size={40} className="text-gray-900" /> 90+
          </h1>
          <h4>Happy client and 60%</h4>
          <span> Recording</span>
        </div>
      </div>
  </div>
  );
};

export default OurTestimonial;
