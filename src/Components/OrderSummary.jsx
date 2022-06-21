export default function OrderSummary({ items, onClear, ttlPrice }) {
  return (
    <div className="max-w-xl m-auto pt-20 text-slate-900">
      <div className="shadow overflow-hidden sm:rounded-md px-4 py-5">
        {items.map((item) => (
          <div className="">
            <li key={item.id} className="py-6 flex justify-between">
              <div className="flex flex-row gap-6">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.pic}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="">{item.name}</div>

                  <div className="flex flex-row gap-6">
                    {item.quantity === 0
                      ? "$ " + item.price
                      : "$ " + item.price * item.quantity}

                    <div className="flex">
                      <p className="">Qty</p>
                      <p className="px-3">{item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => onClear(item)}
              >
                Remove
              </button>
            </li>
          </div>
        ))}
        <div className="">Total ${ttlPrice}</div>
      </div>
    </div>
  );
}
