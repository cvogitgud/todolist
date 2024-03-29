import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddList from './AddList';
import ListDetails from './ListDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/add_list" element={<AddList />}></Route>
          <Route exact path="/lists/:id" element={<ListDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
