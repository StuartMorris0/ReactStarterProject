import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counterReducer from '../slices/counterSlice';

export default function rootReducer(history) {
  return combineReducers({
    counter: counterReducer,
    router: connectRouter(history),
  });
}
