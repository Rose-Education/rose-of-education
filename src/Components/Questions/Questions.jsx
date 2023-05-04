import { BsQuestionCircle } from "react-icons/bs";

const Questions = () => {
  const questions = [
    {
      question: "What is TREO?",
      answer:
        "TREO is a company that is dedicated to increasing fun by creating video and virtual reality games.",
    },
    {
        question: "What are Dragon's Fire Flying Games?",
        answer: "Dragon's Fire Flying Games is a suite of video and virtual reality games that simulate the experience of flying like popular characters such as Dragon, Iron Man, Silver Surfer, Superman, Harry Potter, or Marty McFly."
    },
    {
        question: "How do the Dragon's Fire Flying Games work?",
        answer: "The Dragon's Fire Flying Games use the Nintendo Wii Balance Board concept, where players take off by lifting their heels and balancing on the game platform and console. Sensors transmit data on the player's foot and body positions, weight distribution, and transfer, which are then represented in the game as flying or falling."
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
