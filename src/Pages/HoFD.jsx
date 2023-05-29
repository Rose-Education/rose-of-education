import Nav from "../Components/Nav/Nav";
import video from "../Assets/quest.mp4";
import Contact from "../Components/Contact/Contact";
import Questions from "../Components/Questions/Questions";

const HoFD = () => {
  return (
    <div>
      <div className="relative">
        <div className="fixed duration-600 bg-primaryBlue w-full top-0 z-50">
          <Nav />
        </div>
        <div className="bg-gray-600 bg-opacity-50">
          <div className="max-w-4xl gap-24 px-6 mx-auto w-full h-screen overflow-hidden xl:max-w-6xl xl:px-0">
            <div className="space-y-5 min-w-full h-full flex flex-col items-center justify-center">
              <h2 className="font-bold text-white text-4xl text-center">
                House of Flying Dragons
              </h2>
              <p className="text-white font-[500] text-2xl text-center md:w-1/2">
                Pop-Up Play-based Learning Space, Circus and Exhibition
              </p>
              <button className="bg-primaryColor py-3 px-10 text-white text-[500] font-semibold w-max rounded-full border border-primaryColor duration-500 hover:bg-transparent hover:text-primaryColor">
                Join the Circus
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full object-cover -z-50 bg-gray-600 bg-opacity-80">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      <div className="bg-primaryBlue py-16 md:py-48">
        <h2 className="text-center text-white font-bold text-4xl">
          Whats in the House?
        </h2>
        <div className="max-w-4xl px-6 mx-auto xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-5">
            {[
              "Space ARK",
              "The NOMMAD",
              "EDEN3 Mars Colony",
              "The REAAL KIDZS",
            ].map((item, i) => (
              <div
                className="p-4 bg-white text-primaryDark rounded-2xl"
                key={i}
              >
                <p className="text-center font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl px-6 mx-auto text-center font-semibold text-white mt-16 xl:max-w-6xl xl:px-0">
          <p>
            Just imagine Professor X (of X-Men)'s School for the Gifted, on
            Pandora
          </p>
          <p>Training Dragon Flying Superheroes</p>
        </div>
      </div>

      <div className="max-w-4xl px-6 mx-auto mt-16 xl:max-w-6xl xl:px-0">
        <Questions />
      </div>

      <div className="max-w-4xl mx-auto my-16 xl:max-w-6xl xl:px-0">
        <Contact />
      </div>
    </div>
  );
};

export default HoFD;
