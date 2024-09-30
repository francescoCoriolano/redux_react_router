import CartItem from "../../molecules/CartItem/CartItem";
import { useSelector } from "react-redux";
import { openModal } from "../../../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import Button from "../../atoms/Button/Button";
const CartContainer = () => {
  const dispatch = useDispatch();
  const { total, cartItems } = useSelector((state) => state.cart);
  return (
    <section className="w-[50vw] mt-[40px] p-20 ">
      <h2>Your Bag</h2>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="flex justify-between p-4  ">
          <h4 className="flex justify-between">total</h4>
          <div>$ {total.toFixed(2)}</div>
        </div>
        <Button
          text="Clear cart"
          onClick={() => {
            dispatch(openModal());
          }}
        />
      </footer>
    </section>
  );
};

export default CartContainer;
