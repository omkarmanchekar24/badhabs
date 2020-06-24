import React, {Component} from 'react';
import {View, ScrollView, ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {widthToDp} from '../components/Responsive';
import {Card, Title, Paragraph} from 'react-native-paper';

//Components
import Header from './common/Header';
import FloatingButton from './common/FloatingButton';

//Actions
import {changeScreen} from '../actions/';

import {connect} from 'react-redux';

class HabitDetails extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          headerText={this.props.habit}
          style={styles.headerStyle}
          search={false}
        />
        <ScrollView>
          <Title style={styles.headingStyle}>Overview</Title>
          <Card style={styles.cardStyle}>
            <Card.Content style={styles.contentStyle}>
              <Paragraph style={styles.paragraphStyle}>
                Abstinence Time
              </Paragraph>
              <Title style={{fontSize: widthToDp(5)}}>{this.props.date}</Title>
              <Paragraph style={styles.paragraphStyle}>
                Reason you quit this
              </Paragraph>
              <Title style={styles.titleStyle}>{this.props.why}</Title>
              <Paragraph style={styles.paragraphStyle}>Total Savings</Paragraph>
              <Title style={styles.titleStyle}>Savings</Title>
            </Card.Content>
          </Card>
          <Title style={styles.headingStyle}>Calender</Title>
          <Card style={styles.cardStyle}>
            <Card.Content style={styles.contentStyle}>
              <Paragraph style={styles.paragraphStyle}>
                Abstinence Time
              </Paragraph>
              <Title style={{fontSize: widthToDp(5)}}>{this.props.date}</Title>
              <Paragraph style={styles.paragraphStyle}>
                Reason you quit this
              </Paragraph>
              <Title style={styles.titleStyle}>{this.props.why}</Title>
              <Paragraph style={styles.paragraphStyle}>Total Savings</Paragraph>
              <Title style={styles.titleStyle}>Savings</Title>
            </Card.Content>
          </Card>
        </ScrollView>
        <FloatingButton
          onPress={() => Actions.main()}
          icon="arrow-left"
          style={{right: widthToDp(75)}}
        />
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    marginLeft: widthToDp(10),
  },
  cardStyle: {
    borderWidth: widthToDp(0.5),
    borderColor: '#fff',
    margin: widthToDp(2),
    alignItems: 'center',
  },
  contentStyle: {justifyContent: 'center'},
  headingStyle: {
    fontSize: widthToDp(3),
    paddingLeft: widthToDp(4),
  },
  titleStyle: {fontSize: widthToDp(5), alignSelf: 'center'},
  paragraphStyle: {fontSize: widthToDp(3), alignSelf: 'center'},
};

const mapStateToProps = state => {
  return {
    screen: state.habits.screen,
  };
};

export default connect(
  mapStateToProps,
  {changeScreen},
)(HabitDetails);
