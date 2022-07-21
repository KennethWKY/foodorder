import React, { useState } from "react";

export default function Order() {
  const [add, addCount] = useState(0);

  return (
    <div className="orderCard">
      <button onClick={() => addCount(add - 1)}>-</button>
      <div>{add}</div>
      <button onClick={() => addCount(add + 1)}>+</button>
    </div>
  );
}
