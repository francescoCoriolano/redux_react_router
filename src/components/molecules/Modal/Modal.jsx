import { useDispatch } from "react-redux";
import { clearCart } from "../../../features/cart/cartSlice";
import { closeModal } from "../../../features/modal/modalSlice";
import Button from "../../atoms/Button/Button";
import PropTypes from "prop-types";
const Theme = {
  Primary: "bg-white",
  Outline: "border-solid border-4 border-white-700 text-white",
  OutlineDanger: "border-4 border-red-600 text-red-600 hover:bg-red-600 ",
};

const Modal = ({ variant = "Primary" }) => {
  const dispatch = useDispatch();

  return (
    <aside className="fixed top-0 left-0 bg-[#000000b3] w-[100%] h-[100%] z-10 flex items-center justify-center">
      <div className={`w-[26rem] p-12  ${Theme[variant]} `}>
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
Modal.propTypes = {
  variant: PropTypes.string,
};
export default Modal;
