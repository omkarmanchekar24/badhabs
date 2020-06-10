import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {widthToDp, heightToDp} from '../Responsive';

const Input = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  multiline,
  numberOfLines,
  style,
}) => {
  const {inputStyle, containerStyle, labelStyle} = styles;
  return (
    <View style={[containerStyle, style]}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: widthToDp(2),
    paddingLeft: widthToDp(2),
    paddingTop: heightToDp(2),
    fontSize: widthToDp(3),
    flex: 2,
  },
  labelStyle: {
    fontSize: widthToDp(4),
    paddingLeft: widthToDp(6),
    flex: 1,
  },
  containerStyle: {
    height: heightToDp(8),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default Input;
