import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>To-Do List</h1>
      </Link>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add_list">Add List</Link>
      </div>
    </nav>
  );
};

export default Navbar;