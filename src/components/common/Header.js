import React from 'react';
import {View} from 'react-native';
import {Appbar, Menu, Searchbar} from 'react-native-paper';
import {widthToDp} from '../Responsive';

class Header extends React.Component {
  state = {
    searchQuery: '',
    showSearch: false,
  };

  componentWillUnmount() {
    this.setState({
      showSearch: false,
    });
  }

  toggleModal() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  onChangeSearch(text) {}

  renderSearchInput = () => {
    if (this.state.showSearch) {
      return (
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={this.onChangeSearch.bind(this)}
            value={this.state.searchQuery}
            style={styles.searchStyle}
            iconColor="white"
            onBlur={() => {
              this.setState({showSearch: !this.state.showSearch});
            }}
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

  renderSearch = () => {
    if (this.props.search) {
      return (
        <Appbar.Action
          style={styles.actionStyle}
          icon="magnify"
          onPress={() =>
            this.setState({
              showSearch: !this.state.showSearch,
            })
          }
        />
      );
    }
  };

  render() {
    return (
      <View>
        <Appbar.Header style={styles.containerStyle}>
          {this.renderSearchInput()}
          {this.renderSearch()}
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
  contentStyle: {marginLeft: widthToDp(28)},
  actionStyle: {},
  titleStyle: {
    fontSize: widthToDp(4),
  },
  searchStyle: {backgroundColor: '#546', width: 0, minWidth: '100%'},
};
export default Header;
