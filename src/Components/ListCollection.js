import { Link } from 'react-router-dom';
import { useState } from 'react';

/* Component for Collection of Todo Objects */
const ListCollection = ({ lists, title }) => {
  // note: lists reversed (non-destructive) to display most recents first
  const [blogName, setBlogName] = useState('');

  const dayjs = require('dayjs');
  var localizedFormat = require('dayjs/plugin/localizedFormat');
  dayjs.extend(localizedFormat);

  var customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);

  const [blogDate, setBlogDate] = useState(null);

  let listsWanted = lists.filter(
    (list) =>
      list.name.toLowerCase() === blogName.toLowerCase() ||
      list.date === blogDate
  );

  let listsRecentsFirst = lists.toReversed();
  if (Object.keys(listsWanted).length !== 0) {
    listsRecentsFirst = listsWanted.toReversed();
  }

  return (
    <div className="collection">
      <h1>{title}</h1>

      <div className="blog-search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setBlogName(e.target.value);
          }}
          className="text-search"
        />
        <input
          type="date"
          className="date-search"
          onChange={(e) => {
            setBlogDate(dayjs(e.target.value).format('ll'));
          }}
        />
      </div>

      {listsRecentsFirst.map((list) => (
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
