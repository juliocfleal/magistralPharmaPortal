import logo from "./logo.svg";
import "./App.css";
import "./css/style.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NavbarSup from "./components/NavbarSup";
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarSup/>
          <Routes>
            <Route path="/about"></Route>
            <Route path="/users"></Route>
            <Route exact path="/" element={<Home />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
