import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// eslint-disable-next-line react/prop-types
export const ItemCard = ({ id, title, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className=" w-[12rem] bottom border-solid border-2 border-black flex flex-col justify-between p-[1rem] gap-[20px]">
      <img alt="img-item" src={img} />
      <h4>{title}</h4>
      <p>{price} $</p>
      <button
        type="button"
        className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
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
