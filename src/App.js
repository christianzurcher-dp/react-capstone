import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.scss";
import Home from "./components/pages/Home";
import NavBar from "./components/nav/NavBar";
import Products from "./components/pages/Products";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="App">
      <audio controls autoPlay src="music.mp3" />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/products"
            render={() => <Products products={products} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
