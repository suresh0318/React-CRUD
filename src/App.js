
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/update/:id" element={<Update />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;