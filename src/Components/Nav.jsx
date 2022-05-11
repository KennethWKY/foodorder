/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
  { id: 1, name: "Home", href: "#", link: "/home" },
  { id: 2, name: "Items", href: "#", link: "/items" },
  { id: 3, name: "checkout", href: "#", link: "/checkout" },
];

export default function Nav({ basketState, basket }) {
  return (
    <div className="sticky top-0  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-4 bg-white sm:pb-4 md:pb-4 lg:max-w-2xl lg:w-full lg:pb-4 xl:pb-4">
          {/* <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link to={item.link} key={item.id}>
                      <a
                        key={item.id}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:h-8 hover:w-8"
                    viewBox="0 0 20 20"
                    fill="indigo"
                    onClick={() => basketState(true)}
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </a>
              </nav>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
}
