import React from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
const navigation = [
  //   { name: 'AI Vet', href: '#' },
  // { name: 'Experts', href: '#' },
  // { name: 'Something amazing 💖', href: 'https://hollow-farmhouse-167.notion.site/Ollie-223083b061b64eb4918820285e8e53da' },
  //   { name: 'Kadian',  },
];

const HeroPanel = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
      </div>

      <div className="px-6 pt-6 lg:px-8 hidden">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img className="h-8" src="https://www.myollie.com/_next/static/image/src/molecules/Header/NavigationBar/ollie-logo.77a76e0aec971b04d749bbf44b646524.svg" alt="" /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            {/* <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button> */}
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 "
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
            {/* <a
              href="https://hollow-farmhouse-167.notion.site/Ollie-223083b061b64eb4918820285e8e53da"
              className="rounded-md mr-3 bg-green-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {" "}
              Login
            </a>

            <a
              href="https://hollow-farmhouse-167.notion.site/Ollie-223083b061b64eb4918820285e8e53da"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {" "}
              Signup
            </a> */}
          </div>
        </nav>
      </div>
      {/* 
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src="https://www.myollie.com/_next/static/image/src/molecules/Header/NavigationBar/ollie-logo.77a76e0aec971b04d749bbf44b646524.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <Link to="/sam">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Try our first version with Sam Szuchan's carousel{" "}
                  <a
                    href="https://hollow-farmhouse-167.notion.site/Ollie-223083b061b64eb4918820285e8e53da"
                    className="font-semibold text-indigo-600"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Less Confusion, Faster Execution
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Conquer Linkedin with carousels inspired by the big guys, the
                engagement magnets.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="sam">
                  <a
                    // href="/sam"
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </Link>
                {/* <a href="https://calendly.com/anirudh2024kadian/30min?month=2023-02&date=2023-02-18" className="text-base font-semibold leading-7 text-gray-900">
                  Lets Talk <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            {/* <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
            </svg> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroPanel;
