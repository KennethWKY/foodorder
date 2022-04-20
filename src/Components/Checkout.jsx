import { Link } from "react-router-dom";

export default function Checkout({ items }) {
  return items.map((item) => (
    <li key={item.id} className="flex py-6 w-56 ">
      {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.pic}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div> */}

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#"> {item.name} </a>
            </h3>
            <p className="ml-4">
              {item.quantity === 0 ? item.price : item.price * item.quantity}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex">
            <p className="text-gray-500">Qty</p>
            <p className="text-gray-500 px-3">{item.quantity}</p>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  ));
}
