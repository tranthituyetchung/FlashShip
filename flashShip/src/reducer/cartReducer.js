import { ADD_ITEM, QUICK_ADD, REMOVE_ITEM, RESET_CART, APPLY_PROMOTION, SET_PAYMENT} from "../action/cart/type";
export default (state = {listItem: {}, shopId: null, promotion: null, payment: null, totalItem: 0, totalPrice: 0 , totalDiscount: 0}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      if (!state.listItem || !state.listItem[action.payload.itemId]) {
        state.listItem[action.payload.itemId] = [{number: 1, note: action.payload.note, options: action.payload.additional, hashId: action.payload.hashId, price: action.payload.itemPrice, discount: action.payload.itemDiscount || action.payload.itemPrice}];
        state.totalItem++;
        state.totalPrice += action.payload.itemPrice;
        state.totalDiscount += action.payload.itemDiscount;
      } else {
        let flag = 0;
        if(state.listItem[action.payload.itemId].length) {
          state.listItem[action.payload.itemId] = state.listItem[action.payload.itemId].map((item) => {
            if(action.payload.hashId == item.hashId) {
              item.number++; flag = 1;
              state.totalItem++;
              state.totalPrice += item.price;
              state.totalDiscount += item.discount;
            }
            return item;
          })
          if(!flag) {
            state.listItem[action.payload.itemId] = state.listItem[action.payload.itemId].concat({number: 1, note: action.payload.note, options: action.payload.additional, hashId: action.payload.hashId, price: action.payload.itemPrice, discount: action.payload.itemDiscount || action.payload.itemPrice});
            state.totalItem++;
            state.totalPrice += action.payload.itemPrice;
            state.totalDiscount += action.payload.itemDiscount;
          }
        }       
      }
      return {
        ...state,
      };
    case QUICK_ADD:
      if(state.listItem[action.payload.itemId].length) {
        state.listItem[action.payload.itemId] = state.listItem[action.payload.itemId].map((item) => {
          if(action.payload.hashId == item.hashId) {
            item.number++;
            state.totalItem++;
            state.totalPrice += item.price;
            state.totalDiscount += item.discount;
          }
          return item;
        })
      };
      return {
        ...state
      }
    case REMOVE_ITEM:
      if(state.listItem[action.payload.itemId].length) {
        state.listItem[action.payload.itemId] = state.listItem[action.payload.itemId].map((item) => {
          if(action.payload.hashId == item.hashId) {
            item.number--;
            state.totalItem--;
            state.totalPrice -= item.price;
            state.totalDiscount -= item.discount;
          }
          if(item.number <= 0) return null;
          return item;
        }).filter((item) => item);
        if(state.listItem[action.payload.itemId].length <=0) delete state.listItem[action.payload.itemId];
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
      state.promotion = action.payment.promotion;
      return {
          ...state
      }
    default:
      return state;
  }
};
