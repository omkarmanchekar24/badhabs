import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

//Components
import HabitList from './components//HabitList';
import CreateHabit from './components/CreateHabit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main" hideNavBar>
          <Scene
            key="habitList"
            component={HabitList}
            title="Habits"
            titleStyle={styles.titleStyle}
            initial
          />
        </Scene>
        <Scene key="creates">
          <Scene
            key="createHabit"
            component={CreateHabit}
            title="Create Habit"
            titleStyle={styles.titleStyle}
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  titleStyle: {
    flex: 1,
    textAlign: 'center',
  },
};

export default RouterComponent;
