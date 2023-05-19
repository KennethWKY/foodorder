import React, { useState, useEffectm, useId, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  doc,
  setDoc,
  onSnapshot,
  collection,
  deleteDoc,
} from "firebase/firestore";
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
import AdminDashboard from "./Components/AdminDashboard";
import CheckoutSuccess from "./Components/CheckoutSuccess";
import AllOrderHistory from "./Components/AllOrderHistory";

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
  const [preview, setPreview] = useState(false);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // function closePreview() {
  //   setPreviewIsOpen(false);
  // }

  // function openPreview() {
  //   setPreviewIsOpen(true);
  // }

  // get orders
  const [orders, setOrders] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setOrders(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  const deleteOrder = (orderId) => {
    deleteDoc(doc(db, "order", orderId));
  };

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
    exist.quantity == 1
      ? onClear(exist)
      : setBasket(
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

  const set_info = (e) => {
    e.preventDefault();
    let id = uuidv4();
    let now = new Date();
    setInfo({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      order: basket,
      status: "received",
      id: id,
      time: now,
    });
    openModal();
  };

  //Submit to firebase
  const submit = (e) => {
    e.preventDefault();
    setDoc(doc(db, "order", info.id), info);
    closeModal();
    openSuccess();
  };

  //Confirmation popup
  let [confirm, setConfirm] = useState(false);

  function closeModal() {
    setConfirm(false);
  }

  function openModal() {
    setConfirm(true);
  }

  //Preview
  const [previewItem, setPreviewItem] = useState({});

  const openPreview = (product) => {
    setPreviewItem(product);
    setPreview(true);
  };

  //Success checkout
  const [checkoutSuccess, setcheckoutSuccess] = useState(false);
  function openSuccess() {
    setcheckoutSuccess(true);
  }
  function closeSuccess() {
    setcheckoutSuccess(false);
  }

  return (
    <div className="App bg-white w-full h-screen">
      <Basket
        basketState={setOpen}
        basket={open}
        items={basket}
        onClear={onClear}
        ttlPrice={ttlPrice}
      />
      <Nav basketState={setOpen} basket={open} items={basket} />
      <Confirmation
        setConfirm={setConfirm}
        closeModal={closeModal}
        openModal={openModal}
        submit={submit}
        confirm={confirm}
        info={info}
        basket={basket}
      />
      <Preview
        preview={preview}
        setPreview={setPreview}
        product={previewItem}
        basket={basket}
        onAdd={onAdd}
        onRemove={onRemove}
      />
      <CheckoutSuccess
        orders={orders}
        checkoutSuccess={checkoutSuccess}
        closeSuccess={closeSuccess}
        orderId={info.id}
      />

      {/* <Header /> */}

      <Routes>
        {/* <Route path="home" element={<Intro items={item} />}></Route> */}
        <Route
          path="/"
          element={
            <ItemDisplay
              items={basket}
              products={item}
              openPreview={openPreview}
              onAdd={onAdd}
              onRemove={onRemove}
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
              set_info={set_info}
              openModal={openModal}
              confirm={confirm}
            />
          }
        />
        <Route
          path="order"
          element={<AdminDashboard orders={orders} deleteOrder={deleteOrder} />}
        />
        <Route path="admin" element={<AllOrderHistory orders={orders} />} />
      </Routes>
    </div>
  );
}

export default App;
