import React, {Component} from 'react';
import {Platform, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {widthToDp} from '../Responsive';
import {Card, Paragraph, IconButton} from 'react-native-paper';
//ACTIONS
import {selectedHabit, deleteHabit} from '../../actions';

class ListItem extends Component {
  render() {
    const MORE_ICON =
      Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const {habit, date, why, id} = this.props.habit;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.deleteHabit(id);
        }}>
        <View>
          <Card style={styles.cardStyle}>
            <Card.Title
              title={habit}
              right={props => (
                <IconButton {...props} icon={MORE_ICON} onPress={() => {}} />
              )}
            />
            <Card.Content style={styles.contentStyle}>
              <Paragraph style={styles.paragraphStyle}>{date}</Paragraph>
              <Paragraph style={styles.paragraphStyle}>{why}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  cardStyle: {
    borderWidth: widthToDp(0.5),
    borderColor: '#fff',
    margin: widthToDp(2),
  },
  contentStyle: {},
  titleStyle: {fontSize: widthToDp(4)},
  paragraphStyle: {fontSize: widthToDp(3)},
};

const mapStateToProps = state => {
  return {selected: state.habits.selectedId};
};

export default connect(
  mapStateToProps,
  {selectedHabit, deleteHabit},
)(ListItem);
