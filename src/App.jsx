import { useState } from "react";
import "./App.css";
import CartContainer from "./Components/CartContainer/CartContainer";
import Navbar from "./Components/Navbar.jsx/Navbar";
import Products from "./Components/Products/Products";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  // console.log(isActive);
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-5 border mx-auto w-11/12">
        <Products className=""></Products>
        <CartContainer
          // setIsActive={setIsActive}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}

        ></CartContainer>
      </div>
    </>
  );
}

export default App;
