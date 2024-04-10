import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddList = () => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  // const dayjs = require('dayjs');
  // var localizedFormat = require('dayjs/plugin/localizedFormat');
  // dayjs.extend(localizedFormat);

  // const [date, setDate] = useState(dayjs().format('ll'));

  const options = {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  };

  const initDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    initDate
  );

  const [date, setDate] = useState(formattedDate);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const list = { name, description, date };

    if (list !== null) {
      event.preventDefault();
      fetch(`http://localhost:8000/lists`, {
        method: `POST`,
        headers: { 'Content-type': 'application/job' },
        body: JSON.stringify(list),
      }).then(() => {
        //console.log('new list added');
        navigate('/');
      });
    }
  };

  return (
    <div className="add-list">
      <h1>Add a new To-Do list</h1>
      <form className="add-new-list-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          className="new-list-name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Description</label>
        <textarea
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}></textarea>

        <div className="add-button">
          <button>Add list</button>
        </div>
      </form>
    </div>
  );
};

export default AddList;
