import { ChevronDown, ChevronUp } from "../../../assets/icons";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increase,
  decrease,
} from "../../../features/cart/cartSlice";
import Button from "../../atoms/Button/Button";
// eslint-disable-next-line react/prop-types
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="flex justify-between p-4">
      <img src={img} alt={title} className="w-[5rem] h-[5rem]" />
      <div>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <Button
          text="Remove"
          onClick={() => {
            dispatch(removeItem(id));
          }}
          variant="Outline"
        />
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
