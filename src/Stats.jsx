function Stats({ items }) {
  const itemsLength = items.length;
  if (!itemsLength) {
    return (
      <footer className="stats">
        <em>💣 Start adding item for your trip! </em>
      </footer>
    );
  }
  const packedItems = items.filter((item) => item.packed);
  const packedItemsLength = packedItems.length;
  const percentegPackedItems = Math.round(
    (packedItemsLength / itemsLength) * 100
  );

  return (
    <footer className="stats">
      <em>
        {itemsLength === packedItemsLength
          ? "You are ready to go! 🛫"
          : `
        🧳 You have ${itemsLength} element on your list and you have packed
        ${packedItemsLength} (${percentegPackedItems}%)`}
      </em>
    </footer>
  );
}

export default Stats;
