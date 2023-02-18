export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
      case "SHOP_NOW":
      return { ...state, shop: [...state.shop, { ...action.payload, qty: 1 }] };
    default:
      return state;
  }
};
