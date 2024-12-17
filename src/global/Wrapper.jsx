import { LoadingAnimation } from "./animation";

export const Wrapper = ({ children, loadingCustom }) => {
  return (
    <div className="p-2 mt-12 ">
      {loadingCustom ?  <div>{children}</div> : <LoadingAnimation>{children}</LoadingAnimation>}
    </div>
  );
};

export default Wrapper;
