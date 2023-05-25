const About = () => {
  return (
    <div className="bg-[#b62e31] py-16">
      <div className="px-6 mx-auto max-w-4xl xl:max-w-6xl xl:px-0">
        <h2 className="text-center text-primaryBlue font-bold text-4xl">
          Our STORY
        </h2>
        <div className="mx-auto text-center mt-5 md:w-3/4">
          <div className="space-y-5 text-white">
            <p>
              "Once upon a time, in a garden of technology, there grew a rose of
              education.
            </p>
            <p>
              In a kindergarten and kinder garden, where young seedlings are
              nurtured and encouraged to grow, in the way that is right for
              each."{" "}
            </p>
            <p>“Once upon a time… “</p>
            <p>“…and that Time is Now!”</p>
            <p>“For there grows in the Rose's garden, a Dragon's EGG!”</p>
            <p>
              “From Icarus to Iron Man, Flying is the fancy and fantasy of
              humanity”
            </p>
            <p>
              So Grandpa STORK and TREO are developing Games to turn the World's
              fantasy of human-powered flight into a Virtual Reality.{" "}
            </p>
            <button className="bg-white p-2 px-10 text-primaryColor text-[500] font-semibold w-max rounded-full border border-primaryColor duration-500 hover:bg-transparent hover:text-primaryColor">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
