import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./stateprovider";
import FlipMove from "react-flip-move";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <FlipMove typeName={null}>
      <div className="checkoutProduct">
        <img className="checkoutProduct_img" src={image} />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>Rs.</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
      </div>
    </FlipMove>
  );
};

export default CheckoutProduct;
