import incrementReducer from './increment';
import testReducer from './testreducer'
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  incrementReducer:incrementReducer,
  testReducer: testReducer
});
export default rootReducer;