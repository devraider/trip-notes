import Item from "./Item";

const items = [
  {
    id: 1,
    quantity: 1,
    description: "Passport",
  },
  {
    id: 3,
    quantity: 1,
    description: "Passport",
  },
  {
    id: 2,
    quanity: 1,
    description: "Passport",
  },
  {
    id: 4,
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
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
