import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.scss";
import Home from "./components/pages/Home";
import NavBar from "./components/nav/NavBar";
import Products from "./components/pages/Products";
import SingleProduct from "./components/pages/SingleProduct";
import Cart from "./components/pages/Cart";
import Footer from "./components/nav/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const filter = [];
        data.forEach((product) => {
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
        <div className="nav">
          <img
            src="https://assets.change.org/photos/0/ej/nm/fbejNmdSfpvjxJq-800x450-noPad.jpg?1629400036"
            alt="not amazon logo"
          />
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/products/:slug"
            render={(route) => (
              <SingleProduct
                route={route}
                products={products}
                addToCart={(item) => setCartItems([...cartItems, item])}
              />
            )}
          />
          <Route
            path="/products"
            render={() => (
              <Products
                products={products}
                categories={categories}
                addToCart={(item) => setCartItems([...cartItems, item])}
              />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <Cart
                cartItems={cartItems}
                products={products}
                addToCart={(item) => setCartItems([...cartItems, item])}
                removeFromCart={removeFromCart}
                resetCart={() => setCartItems([])}
              />
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
