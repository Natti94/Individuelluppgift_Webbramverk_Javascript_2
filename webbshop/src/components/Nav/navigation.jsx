import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  <>
  <div className="Links">
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/cart">
      <img
        src="/../webbshop/src/assets/shopping-cart.png"
        width={20}
        height={20}
      />
    </Link>
    </div>
  </>;
}

export default Navigation;
