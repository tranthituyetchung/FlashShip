import { ADD_HISTORY, REMOVE_ALL} from "../action/history/type";
export default (state = [], action) => {
  switch (action.type) {
    case ADD_HISTORY:
      return [
          ...state,
          action.payload.item
      ]
    case REMOVE_ALL:
      return [];
    default:
      return state;
  }
};