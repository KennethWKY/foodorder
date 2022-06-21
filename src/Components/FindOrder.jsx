import React, { useRef } from "react";

export default function FindOrder({ findOrder }) {
  const targetOrder = useRef();

  return (
    <div>
      <div>Find order</div>
      <input
        ref={targetOrder}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      ></input>
      <button
        onClick={() => findOrder(targetOrder.current.value)}
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        Find
      </button>
    </div>
  );
}
