import {combineReducers} from 'redux';
import HabitReducer from './HabitReducer';

export default combineReducers({
  habits: HabitReducer,
});
