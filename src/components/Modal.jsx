import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="bg-white w-[26rem] p-12 ">
        <h4>remove all items from your shopping cart?</h4>
        <div className="flex justify-around mt-8">
          <button
            type="button"
            className="rounded-lg px-4 py-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-green-100 duration-300"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="rounded-lg px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
