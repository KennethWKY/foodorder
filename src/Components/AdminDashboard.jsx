import OrderHistory from "./OrderHistory";

export default function AdminDashboard({ orders }) {
  return (
    <>
      <div>
        <OrderHistory orders={orders} />
      </div>
    </>
  );
}
