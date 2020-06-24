import React, {Component} from 'react';
import {Text, View} from 'react-native';
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
import Header from './common/Header';
import FloatingButton from './common/FloatingButton';

//ACTIONS
import {habitUpdate, createHabit, fetchDate} from '../actions';
import {heightToDp, widthToDp} from './Responsive';

class CreateHabit extends Component {
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
        <Header headerText="Create Habbit" />
        <Card>
          <CardSection>
            <Input
              label="Name"
              placeholder="habit"
              onChangeText={text =>
                this.props.habitUpdate({prop: 'name', value: text})
              }
              value={this.props.name}
            />
          </CardSection>
          <CardSection>
            <TimeInput
              label="Date"
              value={this.props.date}
              onDateChange={text =>
                this.props.habitUpdate({prop: 'date', value: text})
              }
            />
          </CardSection>
          <CardSection>
            <Input
              label="Why"
              placeholder="why"
              value={this.props.why}
              onChangeText={text =>
                this.props.habitUpdate({prop: 'why', value: text})
              }
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
        <FloatingButton
          onPress={() => Actions.main()}
          icon="arrow-left"
          style={{right: widthToDp(75)}}
        />
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
  {habitUpdate, createHabit, fetchDate},
)(CreateHabit);
