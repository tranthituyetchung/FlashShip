import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducer/cartReducer';
import historyReducer from '../reducer/historyReducer';

//map reducer -> store
const rootReducer = combineReducers({
  cart: cartReducer,
  history: historyReducer,
});


const store = createStore(rootReducer, {}, applyMiddleware(thunk));


export default store;