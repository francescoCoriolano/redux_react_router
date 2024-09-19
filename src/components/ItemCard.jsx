import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// eslint-disable-next-line react/prop-types
export const ItemCard = ({ id, title, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className=" card">
      <img alt="img-item" src={img} />
      <h4>{title}</h4>
      <p>{price} $</p>
      <button
        type="button"
        className="btn"
        onClick={(event) => {
          event.preventDefault();
          dispatch(addToCart(id));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
