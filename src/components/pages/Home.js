import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to not amazon</h1>
      <Link to="/products">
        <div className="button">Start Shopping!</div>
      </Link>
    </div>
  );
}
