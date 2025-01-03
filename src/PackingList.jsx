import Item from "./Item";

function PackingList({ items, onRemoveItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onRemoveItem={onRemoveItem} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
