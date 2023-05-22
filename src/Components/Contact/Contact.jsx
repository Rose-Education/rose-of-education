import {
  CiLocationOn,
  CiMail,
  CiMobile1,
  CiTwitter,
  CiLinkedin,
  CiInstagram,
  CiYoutube,
} from "react-icons/ci";

const Contact = () => {
  const contacts = [
    {
      name: "23 Avenue street name",
      icon: CiLocationOn,
    },
    {
      name: "info@rose-education.com",
      icon: CiMail,
    },
    {
      name: "+1 (707) 646-1902",
      icon: CiMobile1,
    },
  ];

  const socials = [
    { name: CiLinkedin, link: "https://www.linkedin.com/groups/3477989/" },
    { name: CiYoutube, link: "https://www.youtube.com/@GrandpaSTORK" },
    { name: CiTwitter, link: "https://twitter.com/iamonlyclay" },
    { name: CiInstagram, link: "https://www.instagram.com/anthonyhall488/" },
  ];

  return (
    <div className="mx-auto px-6 max-w-4xl md:max-w-6xl md:px-0">
      <div className="grid grid-cols-1 p-8 bg-white mx-auto shadow-2xl rounded-xl md:rounded-3xl md:p-16 md:grid-cols-2 md:w-3/4">
        <div className="relative">
          <div className="text-white relative -top-10 h-full w-full left-0 rounded p-6 bg-[#234182] md:p-10 md:absolute md:top-0 md:-left-24">
            <h2 className="font-bold text-xl">Contact Us</h2>
            <div className="mt-5 space-y-6">
              {contacts.map((contact, i) => (
                <div
                  className="flex flex-row items-center gap-3 opacity-80"
                  key={i}
                >
                  <contact.icon className="text-xl" />
                  <p className="text-[14px] flex-1">{contact.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-row items-center justify-center gap-3 md:justify-start">
              {socials.map((social, i) => (
                <a
                  href={social.link}
                  className="flex flex-row items-center bg-white justify-center border h-7 w-7 rounded-full gap-3 opacity-80"
                  key={i}
                >
                  <social.name className="text-lg text-[#234182]" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-5 w-full">
          <div className="space-y-2">
            <h1 className="text-[#234182] text-xl font-bold">Get in Touch</h1>
            <p className="text-gray-400 text-[14px]">
              Feel free to drop us a message below.
            </p>
          </div>

          <form action="" className="space-y-3">
            <label htmlFor="" className="font-semibold text-gray-700">
              <input
                type="text"
                required
                className="border-2 p-2 rounded bg-gray-100 w-full"
                placeholder="Enter your full name"
              />
            </label>
            <label htmlFor="" className="font-semibold text-gray-700 block">
              <input
                type="text"
                className="border-2 p-2 rounded- bg-gray-100 w-full"
                required
                placeholder="Enter your email address"
              />
            </label>
            <textarea
              rows="4"
              className="border-2 p-2 rounded bg-gray-100 w-full outline-none"
              placeholder="Message"
            />
            <input
              type="submit"
              value="Send"
              className="bg-primaryBlue text-white py-2 px-10 w-full font-semibold rounded-full md:w-max"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
