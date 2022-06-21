export default function CheckoutForm({
  onChange_FirstName,
  onChange_LastName,
  onChange_Phone,
  onChange_Email,
  set_info,
  onClear,
}) {
  return (
    <div className="max-w-xl m-auto pt-20">
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={onChange_FirstName}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  required
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  onChange={onChange_LastName}
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  required
                  onChange={onChange_Email}
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  required
                  onChange={onChange_Phone}
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              <button
                onClick={(e) => set_info(e)}
                type="submit"
                className="w-max inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
