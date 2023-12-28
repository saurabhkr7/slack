import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home"
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
