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
import { Title } from "./components/title/title";
import { useHeader } from "./components/header/useHeader";

const App = () => {
  const { title } = useHeader();

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/Overview"
          element={
            <Cards title="test1" tag="" code="" image="" buttonText="" />
          }
        />
        <Route
          path="/Inventory"
          element={<Title title={title.toLocaleUpperCase()} />}
        />
        <Route
          path="/Settings"
          element={<Title title={title.toLocaleUpperCase()} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
