import Nav from "../Components/Nav/Nav";
import video from "../Assets/hofd.mp4";
import Contact from "../Components/Contact/Contact";
import Questions from "../Components/Questions/Questions";

const Stork = () => {
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
                Grandpa STORK
              </h2>
              <p className="text-white font-[500] text-xl text-center md:w-1/2">
                “Grandp-Geek, went down in the creek, to build a flying
                machine…”
              </p>
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
          Who is Grandpa STORK?
        </h2>
        <div className="max-w-4xl px-6 mx-auto xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
            {[
              "Space Tourism: Operation: REAAL KIDZS (STORK)",
              "Sports Technology: Optimizing Reflex Kinetics (STORK)",
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
          <p className="mx-auto md:w-1/2">
            Grandpa STORK aka Black Phoenix Rising, is a dragon flying
            superhero, a Sentinel of WAR (We.All.Rise), here to awaken the
            Children of this Sun to make their STAND and take their place as
            Sentinels of These Times.
          </p>
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

export default Stork;
