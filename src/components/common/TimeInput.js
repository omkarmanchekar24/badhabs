import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

class TimeInput extends Component {
  state = {
    isVisible: false,
  };

  showPicker = () => {
    this.setState({
      isVisible: true,
    });
  };

  onCancel = () => {
    this.setState({
      isVisible: false,
    });
  };

  onConfirm = datetime => {
    this.props.onDateChange(moment(datetime).format('MMMM, Do YYYY hh:mm A'));
    this.setState({
      isVisible: false,
    });
  };
  render() {
    const {containerStyle, labelStyle, timeStyle} = styles;
    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{this.props.label}</Text>

        <TouchableOpacity style={timeStyle} onPress={this.showPicker}>
          <Text>{this.props.value}</Text>
        </TouchableOpacity>

        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
          mode={'datetime'}
        />
      </View>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeStyle: {
    flex: 2,
  },
};

export default TimeInput;
