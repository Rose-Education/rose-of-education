import { BsCheck2All } from "react-icons/bs";

const About = () => {
  const ourValues = [
    {
      name: "Our mission",
      text: "Increase fun. Increase literacy rates. Increase health, wellness and fitness",
    },
    {
      name: "Our values",
      text: "Have fun. Be of service. Make a positive difference.",
    },
    {
      name: "Our vission",
      text: "Everyone will GET to learn the fitness, physics and fun of the Dragon’s Fire Flying Games.",
    },
    {
      name: "Our tagline",
      text: " “Where Education is Child’s Play and Technology is a Game.”",
    },
  ];

  return (
    <div className="px-6 mx-auto max-w-4xl xl:max-w-6xl xl:px-0">
      <h2 className="text-center text-primaryBlue font-bold text-4xl">
        About Us
      </h2>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8 md:gap-32">
        <div className="space-y-3">
          <p>
            The Rose of Education Organization [TREO] is a game and education
            technology developer incorporated in 2010. Because learning should
            be Fun.
          </p>
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

        <div className="space-y-5">
          <p>
            ‘Experience an eternal lightness of being, on the Dragon’s EGG’.
            “Flying is a power to be wielded with Compassion, Humility and
            Integrity” – Black Phoenix Rising, Sentinel of WAR - We All Rise
          </p>
          <button className="bg-primaryColor p-2 px-10 text-white text-[500] font-semibold w-max rounded-full border border-primaryColor duration-500 hover:bg-transparent hover:text-primaryColor">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
