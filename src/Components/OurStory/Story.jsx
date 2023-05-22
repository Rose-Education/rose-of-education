// import image1 from "../../Assets/story/story1.jpg";
// import image2 from "../../Assets/story/story2.jpg";
// import image3 from "../../Assets/story/story3.jpg";
// import image4 from "../../Assets/story/story4.jpg";
// import image5 from "../../Assets/story/story5.jpg";
import { BsCheck2All } from "react-icons/bs";

const Story = () => {
  const ourValues = [
    {
      name: "Our mission",
      text: "Increase fun. Increase literacy rates. Increase health, wellness and fitness",
    },
    {
      name: "Our vision",
      text: "Everyone will GET to learn the fitness, physics and fun of the Dragon’s Fire Flying Games.",
    },
  ];

  return (
    <div className="px-6 mx-auto max-w-4xl md:max-w-6xl">
      <h2 className="text-center text-primaryBlue font-bold text-4xl">
        Have You MET TREO?
      </h2>
      <div className="mt-8 relative">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="space-y-3">
              <p>
                The Rose of Education Organization{" "}
                <span className="font-bold">TREO</span> is a Space Tourism
                industry startup, developing operations in: Education,
                Entertainment and Exploration
              </p>
            </div>
            <div>
              {ourValues.map((value, index) => (
                <div className="flex flex-row items-center gap-4" key={index}>
                  <BsCheck2All className="text-primaryColor text-xl" />
                  <p className="flex-1">
                    <span className="font-semibold text-primaryDark">
                      {value.name}:{" "}
                    </span>
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <div>
                <p>
                  From Icarus to Iron Man, Flying is the fancy and fantasy of
                  humanity.
                </p>
                <p>
                  So Grandpa STORK and TREO are developing the Dragon's Fire
                  Flying EGG (Exercises, Games & Gear) to turn the World's
                  fantasy of human-powered flight into a Virtual Reality.{" "}
                </p>
              </div>
              <button className="bg-transparent p-2 px-10 text-primaryColor text-[500] font-semibold w-max rounded-full border border-primaryColor duration-500 hover:bg-primaryColor hover:text-white">
                Join the Quest
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/QmHY7Mz3Ifs"
            title="Dragon Flying #fitness game for Peak Performance while we age"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          </div>
        </div>

        {/* <div className="grid grid-cols-2 mt-8 gap-3 md:grid-cols-5">
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
        </div> */}
      </div>
    </div>
  );
};

export default Story;
