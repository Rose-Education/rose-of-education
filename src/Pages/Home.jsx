import Hero from "../Components/Hero/Hero";
import Client from "../Components/Clients/Client";
import About from "../Components/About/About";
import Story from "../Components/OurStory/Story";
import Questions from "../Components/Questions/Questions";
import Contact from "../Components/Contact/Contact";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div className="space-y-24 pb-24">
      <Hero />
      <Client />
      <About />
      <Story />
      <Questions />
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Home;
