import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { total, cartItems } = useSelector((state) => state.cart);
  return (
    <section className="cart">
      <h2>Your Bag</h2>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>{total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clean-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
