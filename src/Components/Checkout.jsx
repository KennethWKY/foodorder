import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export default function Checkout({
  items,
  onClear,
  ttlPrice,
  onChange_FirstName,
  onChange_LastName,
  onChange_Phone,
  onChange_Email,
  set_info,
  openModal,
  confirm,
}) {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Order summary */}
        {items.length === 0 ? (
          <div className="max-w-xl m-auto pt-20 px-4 font-extrabold text-7xl text-slate-900">
            Basket is empty
          </div>
        ) : (
          <OrderSummary items={items} onClear={onClear} ttlPrice={ttlPrice} />
        )}

        {/* Form */}
        {}
        <CheckoutForm
          onChange_FirstName={onChange_FirstName}
          onChange_LastName={onChange_LastName}
          onChange_Phone={onChange_Phone}
          onChange_Email={onChange_Email}
          onClear={onClear}
          set_info={set_info}
        />
      </div>
    </div>
  );
}
