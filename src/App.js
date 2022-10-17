import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showModal, setShowModal] = useState(false)

  const showCart = () => {
    setShowModal(true);
  }

  const hideCart = () => {
    setShowModal(false);
  }
  return (
    <>
        {
            showModal && <Cart onClose={hideCart}/>
        }
        <Header onShowCart={showCart}/>
        <Meals/>
    </>
  );
}

export default App;
