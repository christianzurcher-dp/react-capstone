import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/App.scss";
import Home from "./components/pages/Home";
import NavBar from "./components/nav/NavBar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
