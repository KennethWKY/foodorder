import { Fragment, useRef, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from "@heroicons/react/outline";
import AddCount from "./AddCount";

function ItemDisplay({ items, products, openPreview }) {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="bg-white max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.pic}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                    onClick={() => openPreview(product)}
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <div className="flex flex-row justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    $ {product.price}
                  </p>

                  <div className="rounded-full bg-black w-10 h-7 flex justify-center">
                    <AddCount basket={items} selectItem={product} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDisplay;
