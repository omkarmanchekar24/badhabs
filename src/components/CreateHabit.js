import React, {Component} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';

//Components
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
//import DateInput from './common/DateInput';
import TimeInput from './common/TimeInput';
import Spinner from './common/Spinner';

//ACTIONS
import {
  nameChanged,
  dateChanged,
  whyChanged,
  createHabit,
  fetchDate,
} from '../actions';
import {heightToDp} from './Responsive';

class CreateHabit extends Component {
  onNameChange(text) {
    this.props.nameChanged(text);
  }

  onDateChange(text) {
    this.props.dateChanged(text);
  }

  onWhyChange(text) {
    this.props.whyChanged(text);
  }

  create() {
    //id  INTEGER PRIMARY KEY AUTOINCREMENT,habit text, date TEXT,why TEXT
    const {name, date, why} = this.props;
    this.props.createHabit({name, date, why});
  }
  SampleFunction = () => {
    Actions.main();
  };
  renderError() {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  }

  componentWillMount() {
    const date = moment()
      .utc()
      .local()
      .format('MMMM, Do YYYY hh:mm A');
    this.props.fetchDate(date);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Card>
          <CardSection>
            <Input
              label="Name"
              placeholder="habit"
              onChangeText={this.onNameChange.bind(this)}
              value={this.props.name}
            />
          </CardSection>
          <CardSection>
            <TimeInput
              label="Date"
              value={this.props.date}
              onDateChange={this.onDateChange.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Why"
              placeholder="why"
              value={this.props.why}
              onChangeText={this.onWhyChange.bind(this)}
              multiline={true}
              numberOfLines={2}
              style={{height: heightToDp(10)}}
            />
          </CardSection>
          {this.renderError()}
          <CardSection>
            <Button onPress={this.create.bind(this)}>Create</Button>
          </CardSection>
        </Card>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}>
          <Image
            source={require('../images/back.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
  MainContainer: {
    flex: 1,
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 320,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
};

const mapStateToProps = state => {
  const {name, date, why, error} = state.habits;
  return {
    name,
    date,
    why,
    error,
  };
};

export default connect(
  mapStateToProps,
  {nameChanged, dateChanged, whyChanged, createHabit, fetchDate},
)(CreateHabit);
