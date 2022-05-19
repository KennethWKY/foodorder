import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { doc, setDoc, onSnapshot, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import "./index.css";
import "./tailwind.css";
import db from "./firebase";

import Nav from "./Components/Nav";
import ItemDisplay from "./Components/ItemDisplay";
import Order from "./Components/Order";
import Basket from "./Components/Basket";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Preview from "./Components/Preview";
import Footer from "./Components/Footer.jsx";
import Intro from "./Components/Intro";
import Control_pannel from "./Components/Control_pannel";
import Confirmation from "./Components/Confirmation";

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
  const [open, setOpen] = useState(false);
  const [previewIsOpen, setPreviewIsOpen] = useState(true);
  const [info, setInfo] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  function closePreview() {
    setPreviewIsOpen(false);
  }

  function openPreview() {
    setPreviewIsOpen(true);
  }

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
    setBasket((basket) => basket.filter((x) => x != product));
  };

  const eachAmount = basket.map((x) => x.quantity * x.price);
  const ttlPrice = eachAmount.reduce((prev, cur) => prev + cur, 0);

  // useEffect(() =>
  //   onSnapshot(collection(db, "order"), (snapshot) =>
  //     console.log(snapshot.docs.map((doc) => doc.data()))
  //   )
  // );

  const onChange_FirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChange_LastName = (e) => {
    setLastName(e.target.value);
  };

  const onChange_Phone = (e) => {
    setPhone(e.target.value);
  };

  const onChange_Email = (e) => {
    setEmail(e.target.value);
  };

  const onChange_Street = (e) => {
    setStreet(e.target.value);
  };

  const onChange_City = (e) => {
    setCity(e.target.value);
  };

  const onChange_State = (e) => {
    setState(e.target.value);
  };

  const onChange_PostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  const submit_info = () => {
    setInfo({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      order: basket,
    });
    console.log(basket);

    setDoc(doc(db, "order", uuidv4()), info);
  };

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
            <Checkout
              items={basket}
              onClear={onClear}
              ttlPrice={ttlPrice}
              onChange_FirstName={onChange_FirstName}
              onChange_LastName={onChange_LastName}
              onChange_Phone={onChange_Phone}
              onChange_Email={onChange_Email}
              onChange_Street={onChange_Street}
              onChange_City={onChange_City}
              onChange_State={onChange_State}
              onChange_PostalCode={onChange_PostalCode}
              submit_info={submit_info}
            />
          }
        />
        <Route path="control" element={<Control_pannel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
