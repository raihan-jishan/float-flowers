// BtnPrimary
export const BtnPrimary = ({ label, icon , navVarient}) => {
  return (
    <a
      href="link"
      className={` bg-gradient-to-r from-red-500 to-gray-950 p-4 capitalize   rounded-full text-white/80 text-xl    flex gap-3 hover:opacity-95 ${navVarient ? 'max-lg:p-2  max-lg:px-1 max-lg:text-rose-100 px-8  lg:text-xl   max-lg:gap-0  ' :  '  shadow-xl shadow-black/20 px-[1.5rem] '}`}
    >
      {label} {icon}
    </a>
  );
};

// BtnSecondary
export const BtnSecondary = ({ label, icon }) => {
  return (
    <a
      href="link"
      className=" bg-black p-4 capitalize px-8   rounded-full text-white/90 text-xl    flex gap-3 hover:opacity-95 max-lg:px-[5.5rem]  shadow-xl shadow-black/20 "
    >
    {icon}  {label} 
    </a>
  );
};
