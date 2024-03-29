import { Link } from 'react-router-dom';

/* Component for Collection of Todo Objects */
const ListCollection = ({ lists, title }) => {
  return (
    <div className="collection">
      <h1>{title}</h1>
      {lists.map((list) => (
        <div className="list-preview" key={list.id}>
          <Link to={'/lists/' + list.id}>
            <div className="title">
              <h2>{list.name}</h2>
            </div>
            <div className="list-info">
              <p className="description">{list.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListCollection;
