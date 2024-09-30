import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Button from "../atoms/Button/Button";
// eslint-disable-next-line react/prop-types
export const ItemCard = ({ id, title, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className=" w-[12rem] bottom border-solid border-2 border-black flex flex-col justify-between p-[1rem] gap-[20px]">
      <img alt="img-item" src={img} />
      <h4>{title}</h4>
      <p>{price} $</p>
      <Button
        text="Add to Cart"
        onClick={(event) => {
          event.preventDefault();
          dispatch(addToCart(id));
        }}
      />
    </div>
  );
};
