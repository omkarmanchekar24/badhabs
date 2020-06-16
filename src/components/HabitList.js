import React, {Component} from 'react';
import _ from 'lodash';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
//import {widthToDp, heightToDp} from './Responsive';
//import {FAB, Portal} from 'react-native-paper ';

//Components
import Header from './common/Header';
import FloatingButton from './common/FloatingButton';
import List from './List';
//Actions
import {habitsFetch, fetchDate} from '../actions';

class HabitList extends Component {
  state = {
    search: '',
  };

  floatClicked = () => {
    Actions.creates();
  };

  componentWillMount() {
    this.props.habitsFetch();
  }

  renderList() {
    if (this.props.habits.length === 0) {
      return (
        <View style={styles.noData}>
          <Text>Click the button below to add the habits </Text>
        </View>
      );
    }
    return <List habits={this.props.habits} />;
  }

  render() {
    console.log(this.props.habits);
    return (
      <View style={styles.MainContainer}>
        <Header
          headerText="Your Habits"
          search={this.state.search}
          searchIcon={true}
          onChangeText={text => {
            this.setState({search: text});
          }}
        />

        {this.renderList()}

        <FloatingButton icon="plus" onPress={this.floatClicked} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {flex: 1},
  noData: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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
