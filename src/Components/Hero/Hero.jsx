import React from "react";
import Nav from "../Nav/Nav";
import image from "../../Assets/hero.jpg";
import image2 from "../../Assets/hero2.jpg";
import image3 from "../../Assets/hero3.jpg";
import image4 from "../../Assets/image2.jpg";
import image5 from "../../Assets/image3.jpg";

const Hero = () => {
  const images = [image4, image5, image3];

  return (
    <div className="relative">
      <div className="fixed w-full top-0 z-50 drop">
        <Nav />
      </div>
      <div className="max-w-4xl mt-24 gap-24 grid grid-cols-1 px-6 mx-auto md:grid-cols-2 md:h-[500px] xl:max-w-6xl xl:px-0">
        <div className="space-y-5 md:mt-8">
          <h2 className="font-semibold text-primaryDark text-3xl">
          Quest for the REAAL Dragon's Fire Flying EGG.
          </h2>
          <p className="text-gray-600 font-[500] text-[18px]">
          Hatching a New Generation of Fitter and Smarter Kids
          </p>
          <button className="bg-primaryColor p-2 px-10 text-white text-[500] font-semibold w-max rounded-full border border-primaryColor duration-500 hover:bg-transparent hover:text-primaryColor">
            Join the Quest
          </button>

          <div className="flex-row gap-3 !mt-12 hidden md:flex">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="h-40 w-40 rounded-3xl bg-white shadow-2xl p-3 hover:scale-105 duration-500"
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row gap-3 !mt-12 md:hidden">
            {images.slice(0, 2).map((image, index) => {
              return (
                <div
                  key={index}
                  className="h-40 w-40 rounded-3xl bg-white shadow-2xl p-3 hover:scale-105 duration-500"
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-[500px] relative hidden md:block">
          <img
            src={image}
            alt="hero"
            className="object-cover w-full h-full rounded-3xl"
          />
          <div className="absolute h-[300px] w-72 -left-24 -bottom-[10vh] bg-white p-2 rounded-3xl shadow-2xl">
            <img
              src={image2}
              alt="hero"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
