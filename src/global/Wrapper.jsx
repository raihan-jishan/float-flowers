import { LoadingAnimation } from "./animation";

export const Wrapper = ({ children, loadingCustom, customMargin , customBg, className}) => {
  return (
    <div
      className={
        customMargin
          ? `${customBg ? 'bg-gray-50 text-black' : 'bg-transparent'} h-full   mx-auto w-full max-w-screen-xl px-2  `
          : `p-2 mt-12  `
      }
    >
      {loadingCustom ? (
        <div>{children}</div>
      ) : (
        <LoadingAnimation>{children}</LoadingAnimation>
      )}
    </div>
  );
};

export default Wrapper;
