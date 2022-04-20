import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "./index.css";
import "./tailwind.css";

import Nav from "./Components/Nav";
import ItemDisplay from "./Components/ItemDisplay";
import Order from "./Components/Order";
import Basket from "./Components/Basket";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Preview from "./Components/Preview";

import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

function App() {
  const item = [
    { id: 1, name: "Tomato Soup", price: 4.5, pic: img1, quantity: 0 },
    { id: 2, name: "Squash Soup", price: 4.5, pic: img2, quantity: 0 },
    { id: 3, name: "Corn Bisque", price: 6.5, pic: img3, quantity: 0 },
    { id: 4, name: "Whoe WHeat", price: 2, pic: img4, quantity: 0 },
    { id: 5, name: "Italian", price: 2.5, pic: img5, quantity: 0 },
  ];

  const [basket, setBasket] = useState([]);
  const [open, setOpen] = useState(true);
  const [previewIsOpen, setPreviewIsOpen] = useState(true);

  function closePreview() {
    setPreviewIsOpen(false);
  }

  function openPreview() {
    setPreviewIsOpen(true);
  }

  // const addPopup = (product) => {
  //   setBasket((basket) => [...basket, product]);
  // };

  const onAdd = (product) => {
    const exist = basket.find((x) => x.id === product.id);
    if (exist) {
      setBasket(
        basket.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setBasket((basket) => [...basket, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = basket.find((x) => x.id === product.id);
    setBasket(
      basket.map((x) =>
        x.id === product.id
          ? x.quantity > 1
            ? { ...exist, quantity: exist.quantity - 1 }
            : { ...exist, quantity: 0 }
          : x
      )
    );
  };

  const onClear = (product) => {
    const exist = basket.find((x) => x.id === product.id);
    setBasket(
      basket.map((x) => (x.id === product.id ? { ...exist, quantity: 0 } : x))
    );
  };

  const eachAmount = basket.map((x) => x.quantity * x.price);
  const ttlPrice = eachAmount.reduce((prev, cur) => prev + cur, 0);

  // useEffect(() => {
  //   ttlAmount = basket.length;
  // });

  return (
    <div className="App">
      <Basket
        basketState={setOpen}
        basket={open}
        items={basket}
        onClear={onClear}
        ttlPrice={ttlPrice}
      />
      <Nav basketState={setOpen} basket={open} items={basket} />
      <Header />
      <Preview
        isOpen={previewIsOpen}
        closePreview={closePreview}
        onAdd={onAdd}
        onRemove={onRemove}
        products={item}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ItemDisplay
              items={basket}
              onAdd={onAdd}
              onRemove={onRemove}
              products={item}
              openPreview={openPreview}
            />
          }
        />
        <Route path="checkout" element={<Checkout items={basket} />} />
      </Routes>
    </div>
  );
}

export default App;
