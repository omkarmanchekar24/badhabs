import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';

//= ({label, onChangeDate, value}) =>

class DateInput extends Component {
  render() {
    const {containerStyle, labelStyle} = styles;
    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{this.props.label}</Text>
        <DatePicker
          style={{width: 250}}
          date={this.props.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          maxDate={this.props.maxDate}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={() => {}}
        />
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
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
};

export default DateInput;
