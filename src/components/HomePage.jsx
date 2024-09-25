import CartContainer from "./CartContainer";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { ItemCard } from "./ItemCard";

export const HomePage = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { itemsList } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>HomePage</h1>
      <div className="grid grid-cols-4 gap-8 mt-6">
        {itemsList.map((item) => (
          <ItemCard key={item.id} {...item}>
            {item.title}
          </ItemCard>
        ))}
      </div>
      {isOpen && <Modal />}
      <CartContainer />
    </div>
  );
};
