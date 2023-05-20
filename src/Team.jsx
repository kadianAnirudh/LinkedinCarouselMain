import React from "react";
import { Link } from "react-router-dom";
import Sam from "./images/sam.png";

const Team = () => {
  const people = [
    {
      name: "Sam Szuchan",
      Link: "/sam",
      imageUrl: Sam,
    },
    {
      name: "Coming Soon",
      Link: "/",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
    },
    {
      name: "Coming Soon",
      Link: "/",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
    },
    {
      name: "Coming Soon",
      Link: "/",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
    },
  ];

  return (
    <div className="justify-center ">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {" "}
              Choose your Hero{" "}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our templates are based on carousel designs of the big guys who
              seem to have the best engagement.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <Link to={person.Link}>
                <li key={people.indexOf(person)}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
