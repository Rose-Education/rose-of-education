import Nav from "../Components/Nav/Nav";
import video from "../Assets/reaal.mp4";
import Contact from "../Components/Contact/Contact";
import Questions from "../Components/Questions/Questions";

const REAAL = () => {
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
                REAAL: The Games
              </h2>
              <p className="text-white font-[500] text-lg text-center md:w-1/2">
                Reciprocal Expressions: Acronyms, Algorithms and Linguistics
                (REAAL) - creativity, literacy, vocabulary, coding, programming,
                large language model AI
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
                {["TreE of NAMES", "TreE of WORDS"].map((item, i) => (
                  <div
                    className="py-4 px-24 bg-white text-primaryDark rounded-2xl"
                    key={i}
                  >
                    <p className="text-center font-semibold">{item}</p>
                  </div>
                ))}
              </div>
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

      <div className="max-w-4xl px-6 mx-auto mt-16 xl:max-w-6xl xl:px-0">
        <Questions />
      </div>

      <div className="max-w-4xl mx-auto my-16 xl:max-w-6xl xl:px-0">
        <Contact />
      </div>
    </div>
  );
};

export default REAAL;
