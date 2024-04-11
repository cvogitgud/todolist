import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddList from './AddList';
import ListView from './ListView';
import NotFound from './NotFound';

function App() {
  let fadeElemOnScroll = (elem) => {
    let element = document.querySelector(elem);

    if (window.scrollY >= 750) {
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  };

  document.addEventListener('scroll', () => {
    fadeElemOnScroll('.back-top-div');
  });

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
        <div className="back-top-div">
          <a href="" className="back-top-link">
            Back to top
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
