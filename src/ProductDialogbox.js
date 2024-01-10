import React, { useState } from "react";
import "./ProductDescriptionDialog.css";
import CloseIcon from "@mui/icons-material/Close";

function ProductDescriptionDialog({ title, description, onClose }) {
  return (
    <div className="product_description_dialog">
      <div className="product_description_header">
        <h5>{title}</h5>

        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ProductDescriptionDialog;
