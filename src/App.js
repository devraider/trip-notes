import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

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
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
