import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "../icons";
export const NavBar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>
            <Link to="/">redux toolkit</Link>
          </h3>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
