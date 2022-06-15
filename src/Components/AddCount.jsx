export default function AddCount({ basket, selectItem }) {
  const exist = basket.find((x) => x.id == selectItem.id);

  return <div>{exist ? <div>{exist.quantity}</div> : <div>0</div>}</div>;
}
