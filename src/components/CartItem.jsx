import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
// eslint-disable-next-line react/prop-types
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button
          className="rounded-lg px-4 py-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-green-100 duration-300"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          className="text-green-700"
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className=" text-green-700"
          type="button"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            } else {
              dispatch(decrease(id));
            }
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
