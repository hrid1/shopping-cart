import React from "react";

const CartContainer = ({ isActive, handleIsActiveState }) => {
  console.log(isActive);
  const { cart } = isActive;
  return (
    <div className=" col-span-2 ">
      <h2>Cart Container</h2>

      <div className="flex gap-2 justify-around p-2">
        <button
          onClick={() => handleIsActiveState("cart")}
          className={` bg-gray-900 w-full py-3 font-semibold text-lg rounded ${
            cart && "border"
          }`}
        >
          Cart
        </button>

        <button
          onClick={() => handleIsActiveState("about")}
          className={` bg-gray-900 w-full py-3 font-semibold text-lg rounded ${
            !cart && "border"
          }`}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
