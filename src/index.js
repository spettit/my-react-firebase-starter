import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import App from './components/app';

// const config = {
// apiKey: 'AIzaSyB_VkNQ9rlwKUg0RwC5EirnT6RJE1_WfOs',
// authDomain: 'userlist-1112f.firebaseapp.com',
// databaseURL: 'https://userlist-1112f.firebaseio.com',
// storageBucket: 'userlist-1112f.appspot.com',
// };

const config = {
  apiKey: 'AIzaSyCyPdU2fJ4j7gPN58t_eTAdlwQiGd_YLaY',
  authDomain: 'hotelmagic-chat.firebaseapp.com',
  databaseURL: 'https://hotelmagic-chat.firebaseio.com',
  projectId: 'hotelmagic-chat',
  storageBucket: 'hotelmagic-chat.appspot.com',
  messagingSenderId: '953780046525'
};


firebase.initializeApp(config);

ReactDOM.render(
    <App />
  , document.getElementById('root'));
