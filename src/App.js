import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.scss";
import Home from "./components/pages/Home";
import NavBar from "./components/nav/NavBar";
import Products from "./components/pages/Products";
import SingleProduct from "./components/pages/SingleProduct";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const filter = [];
        data.map((product) => {
          if (!filter.includes(product.category)) {
            filter.push(product.category);
          }
        });
        setCategories(filter);
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/products/:slug"
            render={(route) => (
              <SingleProduct route={route} products={products} />
            )}
          />
          <Route
            path="/products"
            render={() => (
              <Products products={products} categories={categories} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
