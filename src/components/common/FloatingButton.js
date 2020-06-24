import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {widthToDp, heightToDp} from '../Responsive';

export default function FloatingButton(props) {
  return (
    <FAB
      style={[styles.fab, props.style]}
      large
      icon={props.icon}
      onPress={() => props.onPress()}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: widthToDp(5),
    bottom: heightToDp(5),
    backgroundColor: '#546',
  },
});
