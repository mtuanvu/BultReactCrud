import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Crud App/Home";
import Create from "./Crud App/Create";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
