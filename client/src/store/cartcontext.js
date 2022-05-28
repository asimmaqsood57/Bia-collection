import React, { useState } from "react";
const CartContext = React.createContext({
  cartItems: 0, // your varibles or functions which you can use it in app Components
});

export default CartContext;

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {" "}
      {props.children}{" "}
    </CartContext.Provider>
  );
};
