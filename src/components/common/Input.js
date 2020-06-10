import React from 'react';
import {View, TextInput, Text} from 'react-native';

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

export default Input;