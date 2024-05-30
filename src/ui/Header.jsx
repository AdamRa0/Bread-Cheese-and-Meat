import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/"> Bread, Cheese &amp; Meat </Link>
      <SearchOrder />
      <p>Admin</p>
    </header>
  );
}
