import { useState } from "react";
import Nav from "../Nav/Nav";
import video from "../../Assets/background.mp4";

const Hero = () => {
  const [sticky, setSticky] = useState("");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      setSticky("#");
    } else setSticky("");
  });

  return (
    <div className="relative">
      <div className={`${sticky ? `fixed` : ""} bg-red-900 fixed duration-600 w-full top-0 z-50`}>
        <Nav />
      </div>
      <div className="max-w-4xl gap-24 px-6 mx-auto w-full  h-[75VH] overflow-hidden xl:max-w-6xl xl:px-0">
        <div className="space-y-5 min-w-full h-full flex flex-col items-center justify-center">
          <h2 className="font-bold text-white text-4xl text-center">
            Treo Presents
          </h2>
          <p className="text-white font-[500] text-2xl text-center md:w-1/2">
          Grandpa STORK's House of Flying Dragons Pop-Up Play-based Learning Space, Circus and Exhibition!
          </p>
          <button className="bg-primaryColor py-3 px-10 text-white text-[500] font-semibold w-max rounded-full border border-primaryColor duration-500 hover:bg-transparent hover:text-primaryColor">
            Join the Circus
          </button>
        </div>
      </div>
      <video
        className="absolute inset-0 w-full h-full object-cover -z-50"
        src={video}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Hero;
