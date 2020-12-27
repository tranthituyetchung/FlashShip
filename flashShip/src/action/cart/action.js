import { ADD_ITEM, REMOVE_ITEM, RESET_CART, APPLY_PROMOTION, SET_PAYMENT } from "./type";

export const addNewItem = (itemId, shopId) => ({
  type: ADD_ITEM,
  payload: { itemId , shopId },
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: {itemId}
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

export const addItem = (itemId, shopId) => {
  return (dispatch, getState) => {
    const state = getState();
    const cartId = state.cart.shopId;
    if(cartId !== shopId) {
        dispatch(resetCart(shopId));
        dispatch(addItem(itemId, shopId))
    }
    else dispatch(addItem(itemId, shopId))
  };
};

