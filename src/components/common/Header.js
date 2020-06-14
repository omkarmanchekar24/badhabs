import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Menu, Button, Divider, MenuItem} from 'react-native-paper';
import {heightToDp, widthToDp} from '../Responsive';

class Header extends React.Component {
  state = {
    visible: false,
  };

  toggleModal() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  renderMenu() {
    return (
      <View>
        <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
        <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
        <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
        <Menu.Item
          icon="content-copy"
          onPress={() => {}}
          title="Copy"
          disabled
        />
        <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
      </View>
    );
  }

  _openMenu() {}
  render() {
    return (
      <View>
        <Appbar.Header style={styles.containerStyle}>
          <Appbar.Content
            title="Your Habits"
            style={styles.contentStyle}
            titleStyle={styles.titleStyle}
          />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => console.log('pressed')}
          />
        </Appbar.Header>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#546',
  },
  contentStyle: {
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: widthToDp(4),
    marginLeft: widthToDp(20),
  },
};
export default Header;
