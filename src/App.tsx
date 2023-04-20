import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header/header";
import { Cards } from "./components/cards/cards";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Overview } from "./components/titles/overview";
import { Settings } from "./components/titles/settings";
import { useHeader } from "./components/header/useHeader";

const App = () => {
  const { title } = useHeader();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Overview" element={<Overview />} />
        <Route
          path="/Inventory"
          element={
            <Cards title="test1" tag="" code="" image="" buttonText="" />
          }
        />
        <Route path="/Settings" element={<Settings />} />
        <Route path="*" element={<Overview />} />
      </Routes>
    </Router>
  );
};

export default App;
