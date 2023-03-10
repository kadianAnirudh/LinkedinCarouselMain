import React from "react";
import { Link } from "react-router-dom";
import Calendly from "../../images/calendly.png";
import Linkedin from "../../images/Linkedin.png";
import Mail from "../../images/Mail.png";

const Footer = () => {
  const stats = [
    {
      id: 1,
      name: "Book a Free call",
      Link: "https://calendly.com/anirudh2024kadian/30min",
      src: Calendly,
    },
    {
      id: 2,
      name: "Catch me building here",
      Link: "https://www.linkedin.com/in/anirudh-kadian/",
      src: Linkedin,
    },
    {
      id: 3,
      Link: "mailto:anirudh2024kadian@gmail.com?subject=Lets%20talk%20about%20the%20Carousel%20Generator",
      name: "Mail me!",
      src: Mail,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <Link to={stat.Link}>
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <div className="h-20 w-50 flex justify-center">
                  <img
                    src={stat.src}
                    alt="calendly logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
              </div>
            </Link>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Footer;
