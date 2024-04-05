import { Link } from 'react-router-dom';
import { useState } from 'react';

/* Component for Collection of Todo Objects */
const ListCollection = ({ lists, title }) => {
  // note: lists reversed (non-destructive) to display most recents first
  const [blogWanted, setBlogWanted] = useState('');

  let listsWanted = lists.filter(
    (list) => list.name.toLowerCase() === blogWanted.toLowerCase()
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
            setBlogWanted(e.target.value);
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
