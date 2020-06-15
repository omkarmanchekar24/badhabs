import {ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SQLite from 'react-native-sqlite-storage';
import {localDB} from '../res/constants/constants';

import {
  NAME_CHANGED,
  DATE_CHANGED,
  WHY_CHANGED,
  HABIT_UPDATE,
  CREATE_HABIT,
  CREATE_HABIT_FAILED,
  HABITS_FETCH_SUCCESS,
  DELETE_HABIT,
  FETCH_DATE,
} from './types';

var db = SQLite.openDatabase(
  localDB.dbName,
  '1.0',
  'reactDemo Database',
  200000,
);

export const nameChanged = text => {
  console.log(text);
  return {
    type: NAME_CHANGED,
    payload: text,
  };
};

export const dateChanged = text => {
  console.log(text);
  return {
    type: DATE_CHANGED,
    payload: text,
  };
};

export const whyChanged = text => {
  console.log(text);
  return {
    type: WHY_CHANGED,
    payload: text,
  };
};

export const habitUpdate = ({prop, value}) => {
  return {
    type: HABIT_UPDATE,
    payload: {prop, value},
  };
};

export const createHabit = ({name, date, why}) => {
  console.log(name);
  return dispatch => {
    db.transaction(function(txn) {
      txn.executeSql(
        'INSERT INTO ' +
          localDB.tableName.tblHabits +
          ' (habit,date,why) VALUES (:habit,:date,:why)',
        [name, date, why],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            dispatch({
              type: CREATE_HABIT,
            });
            Actions.main();
            ToastAndroid.show(
              'Habit Created Successfilly !',
              ToastAndroid.SHORT,
            );
          } else {
            dispatch({
              action: CREATE_HABIT_FAILED,
              payload: 'Something went wrong !',
            });
          }
        },
      );
    });
  };
};

export const habitsFetch = () => {
  return dispatch => {
    db.transaction(function(txn) {
      txn.executeSql(
        'SELECT * FROM ' + localDB.tableName.tblHabits,
        [],
        (tx, results) => {
          var len = results.rows.length;
          console.log('Rows returned:', len);

          if (len > 0) {
            var obj = [];
            for (var i = 0; i < results.rows.length; i++) {
              obj.push(results.rows.item(i));
            }
            //console.log('obj: ' + obj[0].id);

            dispatch({
              type: HABITS_FETCH_SUCCESS,
              payload: obj,
            });
          }
        },
      );
    });
  };
};

export const deleteHabit = id => {
  return dispatch => {
    db.transaction(function(txn) {
      txn.executeSql(
        'Delete from ' + localDB.tableName.tblHabits + ' WHERE id = ' + id,
        [],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            dispatch({
              type: DELETE_HABIT,
              payload: id,
            });
            ToastAndroid.show(
              'Habit Deleted Successfilly !',
              ToastAndroid.SHORT,
            );
          }
        },
      );
    });
  };
};

export const fetchDate = date => {
  return {
    type: FETCH_DATE,
    payload: date,
  };
};
