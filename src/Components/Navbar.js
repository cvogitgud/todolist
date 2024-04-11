import { Link } from 'react-router-dom';
import homeIcon from '/Users/user1/To Do List Project/todo-list/src/Icons/home.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/todolist">
        <h1>To-Do List</h1>
      </Link>

      <div className="links">
        <Link to="/todolist">
          <img className="home-icon" src={homeIcon} alt="" />
        </Link>
        <Link to="/add_list">Add List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
