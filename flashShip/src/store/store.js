import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducer/cartReducer';

//map reducer -> store
const rootReducer = combineReducers({
  cart: cartReducer,
});


const store = createStore(rootReducer, {}, applyMiddleware(thunk));


export default store;