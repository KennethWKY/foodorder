import OrderHistory from "./OrderHistory";
import FindOrder from "./FindOrder";
import React, { useState } from "react";

export default function AdminDashboard({ orders, deleteOrder }) {
  const [selectOrder, setSelectOrder] = useState([]);
  const findOrder = (targetOrder) => {
    let order = orders.find((order) => order.id === targetOrder);
    order ? setSelectOrder(order) : console.log("no order found");
  };

  return (
    <>
      <div className="max-w-xl m-auto pt-20 px-10 bg-white min-h-screen">
        <FindOrder orders={orders} findOrder={findOrder} />
        <div className="pt-10">
          {selectOrder.length != 0 ? (
            <OrderHistory order={selectOrder} deleteOrder={deleteOrder} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
