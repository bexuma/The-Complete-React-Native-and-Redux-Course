import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>  
    )
  }
}

export default App;