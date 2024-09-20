import CartContainer from "./CartContainer";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { ItemCard } from "./ItemCard";

export const HomePage = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const { itemsList } = useSelector((state) => state.cart);

  return (
    <div className="center">
      <h1>HomePage</h1>
      <div className="item-wrap">
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
