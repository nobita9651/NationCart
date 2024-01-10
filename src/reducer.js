const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const initialState = {
  cart: loadCartFromLocalStorage(), // Initialize cart from local storage
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  let newCart = [...state.cart];
  switch (action.type) {
    case "ADD_TO_CART":
      newCart = [...newCart, action.item];
      // Save the updated cart to local storage
      saveCartToLocalStorage(newCart);
      return {
        ...state,
        cart: newCart,
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      // let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
        saveCartToLocalStorage(newCart);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart!`
        );
      }

      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
