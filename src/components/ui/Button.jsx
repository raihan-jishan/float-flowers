// BtnPrimary
export const BtnPrimary = ({ label, icon, navVarient }) => {
  return (
    <a
      href="link"
      className={`    bg-emerald-500  p-4 capitalize   rounded-full text-black/80 text-xl  border-2  border-black    flex gap-3 hover:opacity-95 ${
        navVarient
          ? "max-lg:p-2  max-lg:px-1 max-lg:text-rose-100 px-8  lg:text-xl   max-lg:gap-0  "
          : "  shadow-xl shadow-black/20 px-[1.5rem] "
      }`}
    >
      {label} {icon}
    </a>
  );
};

// BtnSecondary
export const BtnSecondary = ({ label, icon, iconRight }) => {
  return (
    <a
      href="link"
      className={` bg-black  capitalize     p-4 px-8   rounded-full text-white/90 text-xl    flex gap-3 hover:opacity-95 max-lg:px-[5.5rem]  shadow-xl shadow-black/20 `}
    >
      {icon} {label} {iconRight}
    </a>
  );
};
// application downlaod button
export const DownloadAppBtn = ({ label, icon, iconRight }) => {
  return (
    <a
      href="link"
      className={` bg-emerald-600  capitalize     p-5 px-20   rounded-full text-black text-xl font-semibold   flex  gap-3 hover:opacity-95 max-lg:px-[5.5rem]  shadow-xl shadow-black/20 `}
    >
      {icon} {label} {iconRight}
    </a>
  );
};
