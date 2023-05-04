import image1 from "../../Assets/story/story1.jpg";
import image2 from "../../Assets/story/story2.jpg";
import image3 from "../../Assets/story/story3.jpg";
import image4 from "../../Assets/story/story4.jpg";
import image5 from "../../Assets/story/story5.jpg";

const Story = () => {
  return (
    <div className="px-6 mx-auto max-w-4xl md:max-w-6xl">
      <h2 className="text-center text-primaryBlue font-bold text-4xl">
        Read Our Story
      </h2>
      <div className="mt-8 relative">
        <div className="grid grid-cols-1 gap-3 md:gap-16 md:grid-cols-2">
          <div className="space-y-3">
            <p>
              <span className="font-bold">TREO</span> is a company that is
              dedicated to increasing fun. They are creating a suite of video
              and virtual reality games called{" "}
              <span className="font-bold">Dragon's Fire Flying Games</span>,
              which simulate the experience of flying like various popular
              characters.
            </p>
            <p>
              To achieve this, they have modified the Nintendo Wii Balance Board
              concept, where players take off by lifting their heels and
              balancing on the game platform and console.{" "}
              <span className="italic">
                The game uses sensors to transmit data on the player's foot and
                body positions, weight distribution, and transfer, which are
                then represented in the game as flying or falling.
              </span>
            </p>
          </div>

          <div className="space-y-8">
            <p>
              <span className="font-bold">TREO</span>{" "}
              <span className="italic">
                is targeting the $102.9 Billion USD Video Gaming Market
              </span>{" "}
              and is seeking <span className="italic">$3.3 Million USD</span> in
              two rounds to develop the Dragon's EGG prototype, launch a
              crowdfunding campaign, and bring the product to market.{" "}
              <span className="font-bold">TREO</span> has also developed direct
              marketing, social media, partner, and joint-venture strategies to
              promote and sell the game.
            </p>
            <button className="bg-transparent p-2 px-10 text-primaryColor text-[500] font-semibold w-max rounded-full border border-primaryColor duration-500 hover:bg-primaryColor hover:text-white">
              Join Our Community
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8 gap-3 md:grid-cols-5">
          {[image1, image2, image3, image4, image5].map((image, index) => (
            <div
              key={index}
              className="first-of-type:col-span-2 md:first-of-type:col-span-1"
            >
              <img
                src={image}
                alt="Story"
                className="object-cover w-full h-48 rounded-3xl duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
