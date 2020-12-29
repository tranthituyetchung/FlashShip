import { ADD_ITEM, QUICK_ADD, REMOVE_ITEM, RESET_CART, APPLY_PROMOTION, SET_PAYMENT} from "../action/cart/type";
export default (state = {listItem: {}, shopId: null, promotion: null, payment: null, totalItem: 0, totalPrice: 0 , totalDiscount: 0}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!state.listItem || !state.listItem[action.payload.itemId]) {
        state.listItem[action.payload.itemId] = {[action.payload.hashId]: {number: 1, note: action.payload.note, options: action.payload.additional, price: action.payload.itemPrice, discount: action.payload.itemDiscount || action.payload.itemPrice}};
        state.totalItem++;
        state.totalPrice += action.payload.itemPrice;
        state.totalDiscount += action.payload.itemDiscount;
      } else {
        if(state.listItem[action.payload.itemId]) {
          if(state.listItem[action.payload.itemId][action.payload.hashId]) {
            state.listItem[action.payload.itemId][action.payload.hashId].number++;
            state.totalItem++;
            state.totalPrice += state.listItem[action.payload.itemId][action.payload.hashId].price;
            state.totalDiscount += state.listItem[action.payload.itemId][action.payload.hashId].discount;
          } else {
            state.listItem[action.payload.itemId][action.payload.hashId] = {number: 1, note: action.payload.note, options: action.payload.additional, price: action.payload.itemPrice, discount: action.payload.itemDiscount || action.payload.itemPrice};
            state.totalItem++;
            state.totalPrice += state.listItem[action.payload.itemId][action.payload.hashId].price;
            state.totalDiscount += state.listItem[action.payload.itemId][action.payload.hashId].discount;
          }
        }       
      }
      return {
        ...state,
      };
    case QUICK_ADD:
      if(state.listItem[action.payload.itemId]) {
        if(state.listItem[action.payload.itemId][action.payload.hashId]) {
          state.listItem[action.payload.itemId][action.payload.hashId].number++;
          state.totalItem++;
          state.totalPrice += state.listItem[action.payload.itemId][action.payload.hashId].price;
          state.totalDiscount += state.listItem[action.payload.itemId][action.payload.hashId].discount;
        }
      };
      return {
        ...state
      }
    case REMOVE_ITEM:
      if(state.listItem[action.payload.itemId]) {
        if(state.listItem[action.payload.itemId][action.payload.hashId]) {
          state.listItem[action.payload.itemId][action.payload.hashId].number--;
          state.totalItem--;
          state.totalPrice -= state.listItem[action.payload.itemId][action.payload.hashId].price;
          state.totalDiscount -= state.listItem[action.payload.itemId][action.payload.hashId].discount;
        }
        if(state.listItem[action.payload.itemId][action.payload.hashId].number<= 0) 
          delete state.listItem[action.payload.itemId][action.payload.hashId]
        if(Object.keys(state.listItem[action.payload.itemId]).length <= 0)
          delete state.listItem[action.payload.itemId];
      }
      return {
        ...state,
      };
    case RESET_CART:
      state.listItem = {};
      state.totalItem = 0;
      state.totalDiscount = 0;
      state.totalPrice = 0;
      state.shopId = action.payload.shopId;
      return {
        ...state,
      };
    case SET_PAYMENT:
      state.payment = action.payload.paymentId;
      return {
          ...state
      }
    case APPLY_PROMOTION:
      state.promotion = action.payload.promotion;
      return {
          ...state
      }
    default:
      return state;
  }
};
