import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "../../assets/icons";
export const NavBar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <>
      <nav className="bg-green-800">
        <div className="flex justify-between items-center">
          <h3>
            <Link to="/">redux toolkit</Link>
          </h3>
          <ul className=" flex justify-between w-[50%] text-white text-[20px] ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="block relative">
            <div className="  w-[1.75rem] h-[1.75rem] rounded-full flex justify-center align-baseline  bg-green-300 top-[-0.6rem] right-[-0.6rem]">
              <p className="">{amount}</p>
            </div>
            <CartIcon />
          </div>
        </div>
      </nav>
    </>
  );
};
