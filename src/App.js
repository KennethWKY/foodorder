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
import Footer from "./Components/Footer.jsx";
import Intro from "./Components/Intro";

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
    { id: 4, name: "Whole Wheat", price: 2, pic: img4, quantity: 0 },
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

  const onAdd = (product) => {
    const exist = basket.find((x) => x.id === product.id);
    console.log(basket);
    console.log(exist);
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
    setBasket((basket) => basket.filter((x) => x != product));
  };

  const eachAmount = basket.map((x) => x.quantity * x.price);
  const ttlPrice = eachAmount.reduce((prev, cur) => prev + cur, 0);

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

      <Routes>
        <Route path="home" element={<Intro items={item} />}></Route>
        <Route
          path="items"
          element={
            <ItemDisplay
              items={basket}
              onAdd={onAdd}
              onRemove={onRemove}
              products={item}
              openPreview={openPreview}
              previewIsOpen={previewIsOpen}
              closePreview={closePreview}
              setPreviewIsOpen={setPreviewIsOpen}
            />
          }
        />
        <Route
          path="checkout"
          element={
            <Checkout items={basket} onClear={onClear} ttlPrice={ttlPrice} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
