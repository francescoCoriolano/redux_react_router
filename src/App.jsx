import { calculateTotal } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import "./index.css";
import NavBar from "./components/Navbar";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
