import React, {Component} from 'react';
import _ from 'lodash';
import {StyleSheet, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {widthToDp, heightToDp} from './Responsive';
//import {FAB, Portal} from 'react-native-paper ';

//Components
import ListItem from './common/ListItem';
import Header from './common/Header';
import FloatingButton from './common/FloatingButton';

//Actions
import {habitsFetch, fetchDate} from '../actions';

class HabitList extends Component {
  floatClicked = () => {
    Actions.creates();
  };

  componentWillMount() {
    this.props.habitsFetch();
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Header headerText="Your Habits" search={true} />
        <FlatList
          data={this.props.habits}
          renderItem={({item}) => {
            return <ListItem habit={item} />;
          }}
          keyExtractor={habit => habit.id.toString()}
        />
        <FloatingButton onPress={this.floatClicked} />
      </View>
    );
  }
}

const styles = StyleSheet.create({MainContainer: {flex: 1}});

const mapStateToProps = state => {
  const habits = _.map(state.habits.habit, (val, uid) => {
    return {...val, uid};
  });

  return {
    habits,
  };
};

export default connect(
  mapStateToProps,
  {habitsFetch, fetchDate},
)(HabitList);
