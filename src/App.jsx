import { calculateTotal } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import "./index.css";
import NavBar from "./components/Navbar";
import { useRoutes } from "react-router-dom";

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
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
