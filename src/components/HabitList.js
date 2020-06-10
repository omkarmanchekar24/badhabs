import React, {Component} from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {widthToDp, heightToDp} from './Responsive';

//Components
import ListItem from './common/ListItem';

//Actions
import {habitsFetch, fetchDate} from '../actions';

class HabitList extends Component {
  onClick() {
    this.setState({
      flag: !this.state.flag,
    });
  }

  SampleFunction = () => {
    Actions.creates();
  };

  componentWillMount() {
    this.props.habitsFetch();
  }

  render() {
    //[{id: 1, habit: 'abc', why: 'xyz'}]
    //console.log(this.props.habits);
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.habits}
          renderItem={({item}) => {
            return <ListItem habit={item} />;
          }}
          keyExtractor={habit => habit.id.toString()}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
            }}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: widthToDp(20),
    height: heightToDp(10),
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
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
