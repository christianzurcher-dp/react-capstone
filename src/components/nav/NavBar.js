import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/products">
        Products
      </NavLink>
      <NavLink exact to="/cart">
        Cart
      </NavLink>
      <NavLink exact to="/contact">
        Contact
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
    </div>
  );
}
