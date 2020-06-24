import {
  HABIT_UPDATE,
  CREATE_HABIT,
  CREATE_HABIT_FAILED,
  HABITS_FETCH_SUCCESS,
  DELETE_HABIT,
  FETCH_DATE,
  CHANGE_SCREEN,
} from '../actions/types';

import {Home} from '../components/screens';

const INITIAL_STATE = {
  name: '',
  date: '',
  why: '',
  loading: false,
  error: '',
  habit: {},
  selectedHabit: null,
  screen: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HABIT_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case FETCH_DATE:
      return {...state, date: action.payload};
    case CREATE_HABIT:
      return INITIAL_STATE;
    case CREATE_HABIT_FAILED:
      return {...state, error: action.payload};
    case HABITS_FETCH_SUCCESS:
      return {INITIAL_STATE, habit: action.payload};
    case DELETE_HABIT:
      return {
        ...INITIAL_STATE,
        habit: state.habit.filter(item => item.id !== action.payload),
      };
    case CHANGE_SCREEN:
      return {
        ...INITIAL_STATE,
        screen: action.payload,
      };
    default:
      return state;
  }
};
