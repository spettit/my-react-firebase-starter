import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './components/app';

const config = {
  apiKey: "AIzaSyBdutEuqQoyVVBTobljbFcUqvSEEa8_aYA",
  authDomain: "testingonetwothree-d260a.firebaseapp.com",
  databaseURL: "https://testingonetwothree-d260a.firebaseio.com",
  projectId: "testingonetwothree-d260a",
  storageBucket: "",
  messagingSenderId: "633335468035"
};

firebase.initializeApp(config);

ReactDOM.render(
    <App />
  , document.getElementById('root'));
