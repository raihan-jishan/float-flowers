import { useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { RiFlowerLine } from "react-icons/ri";
import { linksData } from "../../constants";
import Brand from "../ui/Brand";
import { BtnPrimary } from "../ui/button";
import NavLinks from "../ui/NavLinks";

const Navbar = () => {
  const [nav, setNav] = useState("");
  
  // handleNav function
  const handleNav = () => setNav(!nav);
  
  // closeNav function
  const closeNav = () => setNav(false);

  return (
    <nav className="backdrop-blur-xl fixed w-full z-20 top-0 start-0 p-4 max-lg:p-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Application Logo */}
        <Brand />
        
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
          {/* CTA Button */}
          <BtnPrimary
            label={"gift flower"}
            icon={<RiFlowerLine className="text-xl  md:text-3xl lg:text-3xl max-lg:hidden " />}
            navVarient
          />
         
          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            className="inline-flex items-center p-2 w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
            onClick={handleNav}
          >
            <span className="sr-only">Open main menu</span>
          {/* bars icon */}
          <HiMiniBars2 size={40}   />
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={
            nav
              ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border   rounded-lg  ` md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            {linksData.map((item) => {
              return <NavLinks label={item.label} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
