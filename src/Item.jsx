function Item({ item, onRemoveItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecorationLine: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
