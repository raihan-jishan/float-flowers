import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import Image from "../assets/image2.png";
import { Wrapper } from "../global/Wrapper";
import { DownloadAppBtn } from "./ui/Button";
const DownloadApp = () => {
  return (
    <Wrapper>
      <section class="bg-white dark:bg-emerald-100  ">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col-reverse">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
              Dowload Our Mobile Application
            </h1>
            <p class="max-w-2xl mb-6   text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-950">
            order your favourite category flower using ios/android application
            </p>
           <div className="flex max-lg:flex-col gap-5">
           <DownloadAppBtn label={'Android'} icon={<FaGooglePlay size={30}/> }/>
           <DownloadAppBtn label={'IOS'} icon={<FaAppStoreIos size={30}/> }/>
           </div>
          </div>
          <div class="  lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Image} className="   " alt="mockup" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default DownloadApp;
