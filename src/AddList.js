const AddList = () => {
  return (
    <div className="add-list">
      <h1>Add a new To-Do list</h1>
      <form className="add-new-list-form">
        <label>Title</label>
        <input type="text" required className="new-list-name" />

        <label>Description</label>
        <textarea required></textarea>
      </form>

      <div className="add-button">
        <button>Add list</button>
      </div>
    </div>
  );
};

export default AddList;
