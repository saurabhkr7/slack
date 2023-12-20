import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
