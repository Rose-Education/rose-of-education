import client1 from "../../Assets/client-1.png";
import client2 from "../../Assets/client-2.png";
import client3 from "../../Assets/client-3.png";

const Client = () => {
  const clients = [client1, client2, client3];

  return (
    <div className="mx-auto max-w-4xl px-6 lg:pt-24 xl:max-w-6xl">
      <div className="bg-primaryColor shadow-2xl grid grid-cols-3 bg-opacity-30 py-2 px-4 rounded-2xl md:py-8">
        {clients.map((client, index) => {
          return (
            <div key={index}>
              <img
                src={client}
                alt="client"
                className="w-full h-24 object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Client;
