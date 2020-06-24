import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider as PaperProvider} from 'react-native-paper';
import Router from './Router';
import reducers from './reducers';
//import {MenuProvider} from 'react-native-popup-menu';

//Sqlite
import CreateTable from './res/manager/CreateTable';

console.disableYellowBox = true;
class App extends Component {
  componentDidMount() {
    //ToastAndroid.show('Mounted', ToastAndroid.SHORT);
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButton.bind(this),
    );
  }

  handleBackButton() {
    if (Actions.currentScene === 'habitList') {
      BackHandler.exitApp();
    }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <PaperProvider>
          <Router />
          <CreateTable />
        </PaperProvider>
      </Provider>
    );
  }
}

export default App;
