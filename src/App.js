import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Products from "./pages/products";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="product" element={<Products />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
