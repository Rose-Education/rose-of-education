import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo2 from "../../Assets/logo2.png";

const Nav = () => {
  const [active, setActive] = useState(false);

  const setNavBar = () => {
    setActive(!active);
    document.body.style.overflow = "hidden";
  };

  const hideNavBar = () => {
    setActive(!active);
    document.body.style.overflow = "visible";
  };

  const navData = [
    { name: "Home" },
    { name: "About" },
    { name: "Donors" },
    { name: "Pricing" },
    { name: "Contact", path: "/contact us" },
  ];

  return (
    <nav className="z-50 sticky top-0 px-6">
      <div className="flex flex-row justify-between py-4 items-center max-w-4xl mx-auto xl:max-w-6xl xl:px-0">
        <Link to="/" className="text-sky-500">
          <img src={logo2} alt="" className="h-16 w-16 object-contain" />
        </Link>
        <div
          className={`flex flex-col absolute bg-primaryBlue  top-0 duration-300 ${
            active ? `-right-[0%]` : `-right-[100%]`
          } h-screen w-full pl-[25%] justify-center space-y-5 md:right-0 md:items-center md:pl-0 md:opacity-[100%] md:h-max md:space-y-0 md:bg-transparent  md:space-x-5 md:relative md:flex-row md:top-0 md:w-max`}
        >
          {/* {diable nav for mobile navBar} */}
          <div className="block absolute text-2xl text-white font-black top-10 right-10 md:hidden">
            <RxCross1 onClick={() => hideNavBar()} />
          </div>
          {navData.map((link, i) => (
            <Link
              onClick={() => hideNavBar()}
              to={link.path}
              key={i}
              className="font-[500] text-xl text-white md:text-primaryColor md:text-lg"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-row items-center space-x-5 text-primaryColor font-semibold">
          <Link to="/shop" className="bg-white border border-primaryColor shadow-2xl py-1.5 rounded-full px-5 flex flex-row items-center gap-2">
            <FaShopify /> Shop
          </Link>
        </div>

        {/* {buttons for mobile navBar} */}
        <div className="flex flex-row items-center space-x-3 md:hidden">
          <AiOutlineMenu className="text-2xl" onClick={() => setNavBar()} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
