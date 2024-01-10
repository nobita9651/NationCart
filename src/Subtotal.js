import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./stateprovider";
import { getCartTotal } from "./reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(Value) => (
          <>
            <p>
              Total Price ({cart.length} items):<strong>{Value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> Wrap as a gift !!
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
      />
      <button>Order Checkout</button>
    </div>
  );
};

export default Subtotal;
