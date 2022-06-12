import { useEffect } from "react";

export default function AddCount({ basket, selectItem }) {
  const selectItemId = selectItem.id;

  return (
    <div>
      {basket.length > 0
        ? basket.map((item) =>
            item.id === selectItemId ? <div>{item.quantity}</div> : null
          )
        : 0}
    </div>
  );
}
