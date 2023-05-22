import Hero from "../Components/Hero/Hero";
import Client from "../Components/Clients/Client";
import About from "../Components/About/About";
import Story from "../Components/OurStory/Story";
import Questions from "../Components/Questions/Questions";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <Client />
      <About />
      <Story />
      <Questions />
      <Contact />
    </div>
  );
};

export default Home;
