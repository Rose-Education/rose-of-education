import { BsQuestionCircle } from "react-icons/bs";

const Questions = () => {
  const questions = [
    {
      question: "What is TREO?",
      answer:
        "TREO is a Space Tourism industry startup developing the games and sports humanity will play in Space.",
    },
    {
        question: "What are Dragon's Fire Flying Games?",
        answer: "The Dragon's Fire Flying Games are a suite of Live Action (non-tech), interactive video and virtual reality games the player balances on a platform and performs moves to simulate the experience of flying on the back of a dragon, Iron Man, Silver Surfer, Harry Potter or Marty McFly."
    },
    {
        question: "How do the Dragon's Fire Flying Games work?",
        answer: "The vision for the Dragon's Fire Flying Games is that when a player mounts their dragon, sensors in the Dragon's EGG will collect data on the player's weight, weight distribution, weight transfer, foot placement, calories burned, energy produced, and transmit to game console or fitness app."
    },
    {
        question: "How much funding does TREO need to bring the Dragon's EGG to market?",
        answer: "TREO is seeking $3.3 Million USD in two rounds to develop the Dragon's EGG prototype, launch a crowdfunding campaign, and bring the product to market."
    },
    {
        question: "What marketing strategies has TREO developed for the Dragon's EGG?",
        answer: "TREO has developed direct marketing, social media, partner, and joint-venture strategies to promote and sell the Dragon's EGG."
    },
  ];

  return (
    <div className="px-6 mx-auto max-w-4xl xl:max-w-6xl xl:px-0">
      <h2 className="text-center text-primaryBlue font-bold text-4xl">
        Frequently Asked Questions
      </h2>

      <div className="mt-8">
        {questions.map((question, index) => (
          <div key={index} className="grid grid-cols-1 gap-4 border-b-2 py-6 md:grid-cols-3 md:gap-16">
            <div className="flex flex-row gap-2 items-start">
              <BsQuestionCircle className="text-primaryColor text-2xl"/>
              <h3 className="text-primaryDark font-semibold text-[16px] flex-1">
                {question.question}
              </h3>
            </div>
            <div className="col-span-2">
              <p className="text-gray-700 font-[400] text-[14px] md:text-[16px]">
                {question.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
