import React from 'react';
import {View} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';
import {widthToDp} from '../Responsive';

class Header extends React.Component {
  state = {
    showSearchBar: false,
  };

  renderSearchInput = () => {
    if (this.state.showSearchBar) {
      return (
        <View>
          <Searchbar
            autoFocus={true}
            icon="arrow-left"
            onIconPress={() => {
              this.props.onChangeText('');
              this.setState({
                showSearchBar: !this.state.showSearchBar,
              });
            }}
            onBlur={() => {
              this.props.onChangeText('');
              this.setState({showSearchBar: false});
            }}
            clearTextOnFocus={true}
            value={this.props.search}
            placeholder="Search"
            onChangeText={text => this.props.onChangeText(text)}
            style={styles.searchStyle}
            iconColor="white"
          />
        </View>
      );
    }
    return (
      <Appbar.Content
        title={this.props.headerText}
        style={styles.contentStyle}
        titleStyle={styles.titleStyle}
      />
    );
  };

  renderSearchButton = () => {
    if (this.props.searchIcon) {
      return (
        <Appbar.Action
          style={styles.actionStyle}
          icon="magnify"
          onPress={() => {
            this.setState({showSearchBar: !this.state.showSearchBar});
          }}
        />
      );
    }
  };

  render() {
    return (
      <View>
        <Appbar.Header style={styles.containerStyle}>
          {this.renderSearchInput()}
          {this.renderSearchButton()}
          <Appbar.Action
            style={styles.actionStyle}
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
  contentStyle: {marginLeft: widthToDp(30)},
  actionStyle: {},
  titleStyle: {
    fontSize: widthToDp(4),
  },
  searchStyle: {
    backgroundColor: '#546',
    width: 0,
    minWidth: '100%',
    color: 'white',
  },
};
export default Header;
