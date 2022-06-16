import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Confirmation({
  setConfirm,
  closeModal,
  openModal,
  submit,
  confirm,
  info,
  basket,
}) {
  const [error, setError] = useState(true);
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={confirm} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Order Details
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-gray-500">
                      Please confirmation your order.
                    </p>
                  </div>

                  <div className="m-3">
                    {basket.map((item) =>
                      item.quantity > 0 ? (
                        <div className="text-gray-900">{item.name}</div>
                      ) : null
                    )}
                  </div>

                  <div>
                    {info.firstName != "" ? null : (
                      <div className="text-red-600">require first name</div>
                    )}

                    {info.lasttName != "" ? null : <div>require last name</div>}

                    {info.email != "" ? (
                      <div>email : {info.email}</div>
                    ) : (
                      <div className="text-red-600">require email name</div>
                    )}

                    {info.phone != "" ? (
                      <div>Phone number : {info.phone}</div>
                    ) : (
                      <div className="text-red-600">
                        require valid phone number
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submit}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
