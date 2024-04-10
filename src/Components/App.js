import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddList from './AddList';
import ListView from './ListView';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/add_list" element={<AddList />}></Route>
          <Route exact path="/lists/:id" element={<ListView />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
