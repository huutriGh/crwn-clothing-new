import CartActiontype from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActiontype.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActiontype.ADD_ITEM,
  payload: item,
});
