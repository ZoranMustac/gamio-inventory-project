import React, { useEffect, useState } from "react";
import { Header } from "./components/header/header";
import { Cards } from "./components/cards/cards";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Overview } from "./components/titles/overview";
import { Settings } from "./components/titles/settings";
import { Status } from "./components/cards/status";
import { ItemCards } from "./components/cards/itemCards";

const App = () => {
  const status = Status.claimed;
  return (
    <Router>
      <Header />
      <div className="alignment">
        <Routes>
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Inventory" element={<ItemCards />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="*" element={<Overview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
