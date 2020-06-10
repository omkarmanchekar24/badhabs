import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {heightToDp, widthToDp} from '../Responsive';

//ACTIONS
import {selectedHabit, deleteHabit} from '../../actions';

//Components
import CardSection from '../common/CardSection';
import Card from '../common/Card';

class ListItem extends Component {
  renderDetails() {
    return (
      <CardSection>
        <Text>Details</Text>
      </CardSection>
    );
  }
  render() {
    const {habit, date, why, id} = this.props.habit;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.deleteHabit(id);
        }}>
        <View>
          <Card style={{marginBottom: 15}}>
            <CardSection style={styles.cardSectionStyle}>
              <Text style={styles.titleStyle}>{habit}</Text>
            </CardSection>
            <CardSection style={styles.cardSectionStyle}>
              <Text style={styles.dateStyle}>{date}</Text>
            </CardSection>
            <CardSection style={styles.cardSectionStyle}>
              <Text style={styles.whyStyle}>{why}</Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: widthToDp(4),
    paddingLeft: 15,
  },
  dateStyle: {
    fontSize: widthToDp(3),
    paddingLeft: 15,
  },
  whyStyle: {
    fontSize: widthToDp(3),
    paddingLeft: 15,
  },
  cardSectionStyle: {
    borderBottomWidth: 0,
  },
};

const mapStateToProps = state => {
  return {selected: state.habits.selectedId};
};

export default connect(
  mapStateToProps,
  {selectedHabit, deleteHabit},
)(ListItem);
