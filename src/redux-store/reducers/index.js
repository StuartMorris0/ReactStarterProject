import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counterReducer from '../slices/counterSlice';
import mathApiReducer from '../slices/mathApiSlice';

export default function rootReducer(history) {
  return combineReducers({
    counter: counterReducer,
    router: connectRouter(history),
    mathApi: mathApiReducer,
  });
}
