import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    this.initializeFirebase();
  }

  initializeFirebase() {
    const config = {
      apiKey: 'AIzaSyAtVRCe4cEDSvjZ9f6tlUWUMbZlvKPpTQI',
      authDomain: 'rn-udemy-course.firebaseapp.com',
      databaseURL: 'https://rn-udemy-course.firebaseio.com',
      projectId: 'rn-udemy-course',
      storageBucket: 'rn-udemy-course.appspot.com',
      messagingSenderId: '827867252444'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>  
    );
  }
}

export default App;
