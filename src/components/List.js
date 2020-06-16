import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

import ListItem from './common/ListItem';

export default class List extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.habits}
          renderItem={({item}) => {
            return <ListItem habit={item} />;
          }}
          keyExtractor={habit => habit.id.toString()}
        />
      </View>
    );
  }
}
