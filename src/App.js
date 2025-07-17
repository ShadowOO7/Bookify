import { Link, Routes, Route } from "react-router-dom";

//components
import MyNavBar from "./components/Navbar";

//pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";
import Home from "./pages/Home"; // import Home


//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Component } from "react";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <div>
        <MyNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/book/list" element={<ListingPage />} />
          </Routes>
      </div>
    </>
  );
};

export default App;