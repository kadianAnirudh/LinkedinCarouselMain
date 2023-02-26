import React from 'react'

const Team = () => {

const people = [
  {
    name: 'Dr. Nick Stafford ',
    role: 'DVM, ACVS & ACVB',
    imageUrl:
      'https://media.licdn.com/dms/image/C4E03AQGbo1H6TY_i-w/profile-displayphoto-shrink_800_800/0/1516215323211?e=1681948800&v=beta&t=SMx52joSICpzPFzq_Xa0_ExEVDMa1_3kwlI-JoaFiBc'
  }, {
    name: 'Dr. William Powers',
    role: 'DVM',
    imageUrl: 'https://media.licdn.com/dms/image/C4E03AQETpTQWyOUyBw/profile-displayphoto-shrink_200_200/0/1661883267219?e=1681948800&v=beta&t=IQlvzt_YoMEArLtwuX6muESccXySBhR3tmVMxDc75mc'},  {
    name: 'Dr. Jan Albert',
    role: 'ACVS',
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQFcSNhLfGS1QQ/profile-displayphoto-shrink_200_200/0/1649097076389?e=1681948800&v=beta&t=vgeaXAsoWNLoOxau06pFxc2W0UlNmreQOX9D6nix3Ws'
  },  {
    name: 'Dr. Josephine Rotondi',
    role: 'ACVS & ACVB',
    imageUrl: 'https://media.licdn.com/dms/image/C4D03AQF-OpjPgBOmBA/profile-displayphoto-shrink_200_200/0/1527653183666?e=1681948800&v=beta&t=NiWygREh67mDXwRvNvYqV4VjbmbCLmErCbmnHmjQ4jk'
  }
  // More people...
]

  return (
    <div className="justify-center ">

       <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Experts </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
You can trust that our high-quality products prioritize the health and well-being of your furry friend.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
     
        </div>
  )
}

export default Team