import { Link } from "react-router-dom";
import logo2 from "../../Assets/logo2.png";

const Footer = () => {
  const socials = [
    { name: "LinkedIn", link: "https://www.linkedin.com/groups/3477989/" },
    { name: "Youtube", link: "https://www.youtube.com/@GrandpaSTORK" },
    { name: "Twitter", link: "https://twitter.com/iamonlyclay" },
    { name: "Instagram", link: "https://www.instagram.com/anthonyhall488/" },
  ];

  const quickLinks = [
    { name: "Our Story", path: "/" },
    { name: "HoFD", path: "/hofd" },
    { name: "Dragons Egg", path: "/dragonsegg" },
    { name: "REAAL", path: "/reaal" },
    { name: "Grandpa STORK", path: "/stork" },
    { name: "Contact", path: "/contact us" },
  ];

  return (
    <footer>
      <div className="mx-auto px-6 max-w-4xl space-y-5 xl:max-w-6xl xl:px-0">
        <div className="flex flex-col gap-5 justify-between md:flex-row">
          <div className="space-y-3 md:w-1/3 ">
            <Link to="/">
              <img src={logo2} alt="" className="h-12" />
            </Link>
            <p className="text-[12px] text-white">
              “Once upon a time in a garden of technology, there grew a rose of
              education.” “In a kindergarten, and kinder garden, where young
              seedlings are nurtured and encouraged to grow in the way that is
              right for each.” “Once upon a tim...” “...and that time is NOW!
              For there grows in the Rose’s garden, a Dragon’s EGG!”
            </p>
          </div>

          {/* start for desktop footer */}
          <div className="space-y-2 hidden md:block">
            <h2 className="font-semibold">Community</h2>
            {socials.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="text-[14px] font-[400] block"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="space-y-2 hidden md:block">
            <h2 className="font-semibold">Quick Links</h2>
            {quickLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-[14px] font-[400] block"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* end for desktop footer */}

          {/* start for mobile footer */}
          <div className="flex flex-row justify-between md:hidden">
            <div className="space-y-2">
              <h2 className="font-semibold">Community</h2>
              {socials.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="text-[14px] font-[400] block"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold">Quick Links</h2>
              {quickLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="text-[14px] font-[400] block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* end for mobile footer */}
        </div>

        <div className="flex flex-col items-center justify-between border-t py-2 md:flex-row">
          <div>
            <p>
              &copy;{new Date().getFullYear()}{" "}
              <span className="font-bold">TREO</span>. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
