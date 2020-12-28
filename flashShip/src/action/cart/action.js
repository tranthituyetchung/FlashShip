import { ADD_ITEM, REMOVE_ITEM, RESET_CART, APPLY_PROMOTION, SET_PAYMENT } from "./type";

export const addNewItem = (itemId, note, additional, hashId) => ({
  type: ADD_ITEM,
  payload: { itemId , note, additional , hashId },
});

export const quickAdd = (itemId, hashId) => ({
  type: QUICK_ADD,
  payload: { itemId , hashId },
})

export const removeItem = (itemId, hashId) => ({
  type: REMOVE_ITEM,
  payload: {itemId, hashId}
})

export const resetCart = (shopId) => ({
    type: RESET_CART,
    payload: {shopId}
})

export const applyPromotion = (promotion) => ({
    type: APPLY_PROMOTION,
    payload: {promotion}
})

export const setPayment = (paymentId) => ({
    type: SET_PAYMENT,
    payload: {paymentId}
})
const cyrb53 = function(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
  h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1>>>0);
};

export const addItem = (itemId, shopId, note, additional) => {
  return (dispatch, getState) => {
    const cart = getState().cart;
    if(cart.shopId !== shopId) dispatch(resetCart(shopId));
    const hashId = cyrb53(note + JSON.stringify(additional));
    dispatch(addNewItem(itemId, note, additional, hashId));
  };
};

