import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false)

  const showCart = () => {
    setShowModal(true);
  }

  const hideCart = () => {
    setShowModal(false);
  }
  return (
    <CartProvider>
        {
            showModal && <Cart onClose={hideCart}/>
        }
        <Header onShowCart={showCart}/>
        <Meals/>
    </CartProvider>
  );
}

export default App;
