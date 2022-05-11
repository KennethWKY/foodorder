import { Link } from "react-router-dom";

export default function Header({ bg_large }) {
  return (
    <main className="h-96 mt-2 mx-auto max-w-7xl px-8 sm:mt-12 sm:px-6 md:mt-2 lg:mt-2 lg:px-8 xl:mt-2 bg-[url('/src/img/bg_large.jpg')] bg-fixed bg-contain bg-no-repeat">
      <div className="pt-12 sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Food Ordering</span>{" "}
          <span className="block text-indigo-600 xl:inline">
            online business
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          description.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link to={"items"}>
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Order Now
              </a>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}