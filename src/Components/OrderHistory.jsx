import { PaperClipIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

export default function OrderHistory({ db, orders }) {
  //   onSnapshot(collection(db, "order"), (snapshot) =>
  //     snapshot.docs.map((doc) => doc.data())
  //   );
  return (
    <>
      <div className="mx-20">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg mb-10"
          >
            <Disclosure>
              <Disclosure.Button className="">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Order
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {order.id}
                  </p>
                </div>
              </Disclosure.Button>

              <Disclosure.Panel className="text-gray-500">
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {order.firstName} {order.lastName}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Phone Number
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {order.phone}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {order.email}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Order date
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        June 2nd 2023
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Order Status
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {order.status}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Items
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul
                          role="list"
                          className="border border-gray-200 rounded-md divide-y divide-gray-200"
                        >
                          {order.order.map((item) => (
                            <li
                              ket={item.id}
                              className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                            >
                              <div className="w-0 flex-1 flex items-center">
                                <PaperClipIcon
                                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 flex-1 w-0 truncate">
                                  {item.name} x {item.quantity}
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                {/* <a
                              href="#"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Download
                            </a> */}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        ))}
      </div>
    </>
  );
}
