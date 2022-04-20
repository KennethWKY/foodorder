import React, { useState } from "react";

function ItemDisplay({ items, onAdd, onRemove, products, openPreview }) {
  // const item = items.map((food) => (
  //   <a key={food.id} className="group">
  //     <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
  //       <img
  //         src={food.pic}
  //         alt={food.name}
  //         className="w-full h-full object-center object-cover group-hover:opacity-75"
  //       />
  //     </div>
  //     <h3 className="mt-4 text-sm text-gray-700">{food.name}</h3>
  //     <p className="mt-1 text-lg font-medium text-gray-900">{food.price}</p>
  //   </a>
  // ));

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group"
              onClick={openPreview}
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.pic}
                  alt={product.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <div className="flex flex-row justify-between">
                <p className="mt-1 text-lg font-medium text-gray-900">
                  $ {product.price}
                </p>
                {/* <div className="inline-flex bg-gray-300">
                  <button
                    onClick={() => onRemove(product)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-l"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p className="mt-1 text-lg font-medium text-gray-900 py-1 px-3 bg-gray-300 align-middle">
                    {product.quantity}
                  </p>
                  <button
                    onClick={() => onAdd(product)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-r"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemDisplay;
