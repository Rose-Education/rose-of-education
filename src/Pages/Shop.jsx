import Nav from "../Components/Nav/Nav";
import ShopItems from "../Components/ShopItems.jsx/ShopItems";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Shop = () => {
  return (
    <div>
      <div className="bg-white fixed w-full top-0 z-50">
        <Nav />
      </div>
      <div className="mx-auto max-w-4xl px-6 xl:max-w-6xl xl:px-0 mt-20 mb-24">
        <div className="shop h-40 p-4 md:h-56 md: rounded-3xl">
          <div className="flex flex-row justify-end gap-2">
            <Link
              to="/shop"
              className="text-white shadow-2xl py-1.5 rounded-full px-5 flex flex-row items-center gap-2"
            >
              <AiOutlineHeart /> Wishlist
            </Link>
            <Link
              to="/shop"
              className="relative shadow-2xl text-white py-1.5 rounded-full px-5 flex flex-row items-center gap-2"
            >
              <BsFillCartCheckFill /> Cart
              <p className="bg-red-600 absolute text-white h-4 w-4 rounded-full flex flex-row items-center justify-center text-sm right-2 top-1">
                0
              </p>
            </Link>
          </div>

          <div className="h-full flex flex-row items-center justify-center -mt-4 md:-mt-9">
            <h2 className="text-white font-black text-2xl italic text-center md:text-3xl">
              Get you Dragon Egg today!
            </h2>
          </div>
        </div>
        <ShopItems />
      </div>
    </div>
  );
};

export default Shop;
