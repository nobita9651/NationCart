import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./stateprovider";
import ProductDescriptionDialog from "./ProductDialogbox";
import { useSpring, animated } from "react-spring"; // Import the required modules

const Product = ({ id, title, image, price, rating, description }) => {
  const [{}, dispatch] = useStateValue();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Define a fade-in animation spring
  const dialogAnimation = useSpring({
    opacity: isDialogOpen ? 1 : 0, // Fade in when dialog is open
  });

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="1234" />
      <button onClick={addToCart}>Add to shopping Cart</button>
      <button onClick={openDialog} className="info_button">
        i
      </button>
      {isDialogOpen && (
        <animated.div style={dialogAnimation}>
          <ProductDescriptionDialog
            title={title}
            description={description}
            onClose={closeDialog}
          />
        </animated.div>
      )}
    </div>
  );
};

export default Product;
