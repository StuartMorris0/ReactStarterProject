import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counterReducer from '../../features/counter/counterSlice';

export default function rootReducer(history) {
  return combineReducers({
    counter: counterReducer,
    router: connectRouter(history),
  });
}
