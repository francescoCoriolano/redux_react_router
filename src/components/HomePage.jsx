import CartContainer from "./CartContainer";
import Modal from "./Modal";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div>
      <h1>HomePage</h1>
      {isOpen && <Modal />}
      <CartContainer />
    </div>
  );
};
