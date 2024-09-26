import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { calculateTotal } from "./features/cart/cartSlice";
import { About, Contact, HomePage } from "./components";
import { NavBar } from "./components/organism/Navbar";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const RenderRouter = () => {
    const element = useRoutes([
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ]);
    return element;
  };
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RenderRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
