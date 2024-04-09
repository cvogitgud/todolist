import { Link } from 'react-router-dom';
import { useState } from 'react';

/* Component for Collection of Todo Objects */
const ListCollection = ({ lists, title }) => {
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState(null);

  let listsRecentsFirst = lists.toReversed(); // default: show all lists

  // Find an exactly matching list, if possible
  let matchingList = lists.find(
    (list) =>
      list.name.toLowerCase() === inputName.toLowerCase() &&
      list.date === inputDate
  );

  // If no exact match exists, find lists of matching name/date
  if (!matchingList) {
    let listsWanted = lists.filter(
      (list) =>
        list.name.toLowerCase() === inputName.toLowerCase() ||
        list.date === inputDate
    );

    if (Object.keys(listsWanted).length !== 0) {
      listsRecentsFirst = listsWanted.toReversed();
    }
  }

  return (
    <div className="collection">
      <h1>{title}</h1>

      <div className="blog-search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          className="text-search"
        />

        <input
          type="date"
          className="date-search"
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={(e) => {
            const options = {
              month: 'short',
              year: 'numeric',
              day: 'numeric',
            };
            const date = new Date(e.target.value + 'T00:00:00');
            const formattedDate = new Intl.DateTimeFormat(
              'en-US',
              options
            ).format(date);

            setInputDate(formattedDate);
          }}
        />
      </div>

      {(matchingList && (
        <div className="list-preview" key={matchingList.id}>
          <Link to={'/lists/' + matchingList.id}>
            <div className="title">
              <h2>{matchingList.name}</h2>
            </div>
            <div className="list-info">
              <p className="description">{matchingList.description}</p>
              <p className="date-created">Created {matchingList.date}</p>
            </div>
          </Link>
        </div>
      )) ||
        listsRecentsFirst.map((list) => (
          <div className="list-preview" key={list.id}>
            <Link to={'/lists/' + list.id}>
              <div className="title">
                <h2>{list.name}</h2>
              </div>
              <div className="list-info">
                <p className="description">{list.description}</p>
                <p className="date-created">Created {list.date}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ListCollection;
