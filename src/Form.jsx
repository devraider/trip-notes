function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      <input type="text" placeholder="Add item..." />
      <button>Add</button>
    </form>
  );
}

export default Form;
