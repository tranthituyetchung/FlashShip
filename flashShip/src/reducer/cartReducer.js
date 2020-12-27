import { ADD_ITEM, REMOVE_ITEM, RESET_CART, APPLY_PROMOTION, SET_PAYMENT} from "../action/cart/type";
export default (state = {listItem: null, shopId: null, promotion: null, payment: null}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!state.listItem[action.payload.itemId]) {
        state.listItem[action.payload.itemId] = {number: 1, name: 'xxx'};
      } else state.listItem[action.payload.itemId].number++;
      return {
        ...state,
      };
    case REMOVE_ITEM:
      state.listItem[action.payload.itemId].number--;
      if (state.listItem[action.payload.itemId].number <= 0) {
        delete state.listItem[action.payload.itemId];
      }
      return {
        ...state,
      };
    case RESET_CART:
      state.listItem = null;
      state.shopId = action.payload.shopId
      return {
        ...state,
      };
    case SET_PAYMENT:
      state.payment = action.payload.paymentId;
      return {
          ...state
      }
    case APPLY_PROMOTION:
      state.promotion = action.payment.promotion;
      return {
          ...state
      }
    default:
      return state;
  }
};