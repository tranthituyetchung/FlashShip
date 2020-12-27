import { ADD_HISTORY, REMOVE_ALL} from "./type";

export const addHistory = (item) => ({
  type: ADD_HISTORY,
  payload: { item },
});

export const removeAll = () => ({
  type: REMOVE_ALL,
})


