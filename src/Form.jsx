import { useState } from "react";

function Form() {
  const [description, setDescription] = useState("");
  const [itemCount, setItemCount] = useState(2);

  function handleSubmit(e) {
    e.preventDefault();

    // Guard to provent empty value fro input field
    if (!description) {
      return;
    }

    const newItem = {
      description,
      itemCount,
      packed: false,
      id: Date.now(),
    };
    setDescription("");
    setItemCount(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        onChange={(e) => setItemCount(Number(e.target.value))}
        value={itemCount}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
