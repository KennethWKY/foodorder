/* This example requires Tailwind CSS v2.0+ */

import { Popover, Transition, Dialog, Tab } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Fragment, useState, useId } from "react";

const navigation = [
  { id: 1, name: "Home", href: "#", link: "/" },
  // { id: 2, name: "Items", href: "#", link: "/items" },
  { id: 3, name: "Checkout", href: "#", link: "/checkout" },
  { id: 4, name: "Order History", href: "#", link: "/order" },
];

export default function Nav({}) {
  const id = useId();
  return (
    <>
      {/* <div className="sticky top-0 bg-white overflow-hidden z-10">
        <div className="max-w-7xl mx-auto ">
          <div className="relative pb-4 bg-white sm:pb-4 md:pb-4 lg:w-full lg:pb-4 xl:pb-4">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between "
                aria-label="Global"
              >
                <div className=" sm:block sm:ml-10 sm:pr-4 sm:space-x-8">
                  {navigation.map((item) => (
                    <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                      <Link
                        to={item.link}
                        key={item.id}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div> */}

      <div className="sticky top-10 z-10 bg-slate-100 w-max mx-auto border-2 rounded-full border-slate-300">
        <div className="flex justify-center">
          {navigation.map((item) => (
            <Link
              to={item.link}
              key={item.id + id}
              href={item.href}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              <button className="inline-flex rounded-full border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                {item.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
