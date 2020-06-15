import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {widthToDp} from '../components/Responsive';
import {Card, Title, Paragraph} from 'react-native-paper';

import Header from './common/Header';

export default class HabitDetails extends Component {
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
