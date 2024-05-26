import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/"> Bread, Cheese &amp; Meat </Link>
      <p>Admin</p>
    </header>
  );
}
