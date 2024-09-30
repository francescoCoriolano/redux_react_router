import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/modal/modalSlice";
import Button from "../atoms/Button/Button";
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="fixed top-0 left-0 bg-[#000000b3] w-[100%] h-[100%] z-10 flex items-center justify-center">
      <div className="bg-white w-[26rem] p-12 ">
        <h4>remove all items from your shopping cart?</h4>
        <div className="flex justify-around mt-8">
          <Button
            text="Confirm"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            variant="Outline"
          />
          <Button
            text="Cancel"
            onClick={() => {
              dispatch(closeModal());
            }}
            variant="OutlineDanger"
          />
        </div>
      </div>
    </aside>
  );
};

export default Modal;
