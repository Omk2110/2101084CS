import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./ProductList";

const App = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  return (
    <Router>
      <Route path="/">
        <ProductList products={products} />
      </Route>
    </Router>
  );
};

export default App;