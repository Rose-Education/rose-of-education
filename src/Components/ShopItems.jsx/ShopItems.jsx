import { data } from "./Data";
import { AiFillHeart } from "react-icons/ai";

const ShopItems = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-2 md:gap-5 md:grid-cols-5">
        {data.map((item, i) => (
          <div key={i} className="bg-white shadow rounded-lg overflow-hidden duration-500 hover:scale-95">
            <div className="relative">
              <img src={item.img} alt="" className="h-32 w-full object-cover" />
              <div className="absolute top-1 right-1 bg-white cursor-pointer h-5 w-5 rounded-full flex flex-row items-center justify-center">
                <AiFillHeart className="text-red-600" />
              </div>
            </div>
            <div className="p-2 space-y-1">
              <h2 className="text-primaryColor font-[500] text-[16px]">
                {item.name}
              </h2>
              <p className="text-[14px] font-semibold text-primaryBlue">
                Price: ${item.price}
              </p>
            </div>

            <div className="px-2 pb-2">
              <button className="bg-primaryColor py-1 w-full rounded-full text-center text-white">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
