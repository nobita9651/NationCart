import React, { useState } from "react";
import "./Checkout.css";
import Block from "./button";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./stateprovider";

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const [itemsToRemove, setItemsToRemove] = useState([]);

  const removeFromCart = (id) => {
    // Add the item's ID to the list of items to be removed
    setItemsToRemove((prevItems) => [...prevItems, id]);

    // Use setTimeout to remove the item from the cart after the animation completes
    setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
      });
      // Remove the item from the itemsToRemove list
      setItemsToRemove((prevItems) => prevItems.filter((item) => item !== id));
    }, 500); // Adjust the duration based on your animation time
  };

  return (
    <div className="checkout">
      <div className="checkout_content">
        <div className="buttonn">
          <Block />
        </div>

        <div className="checkout_left">
          <h2 className="checkout_title">
            Hey <span className="highlighted-text">{user?.email}</span>,
          </h2>
          <h2>Here is your Shopping Cart!!</h2>
          {cart.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              onRemove={() => removeFromCart(item.id)}
              animateRemove={itemsToRemove.includes(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
