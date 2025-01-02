import Item from "./Item";

const items = [
  {
    quantity: 1,
    description: "Passport",
  },
  {
    quantity: 1,
    description: "Passport",
  },
  {
    quantity: 1,
    description: "Passport",
  },
  {
    quantity: 1,
    description: "Passport",
    packed: true,
  },
];
function PackingList() {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
