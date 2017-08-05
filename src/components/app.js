import React, { Component } from 'react';
import * as firebase from 'firebase';

import MessageList from './message-list';
import NewMessage from './new_message';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: 'Sean',
      data: []
    };
  }

  componentWillMount() {
    const Messages = firebase.database().ref().child('startertemplate');
    Messages.on('value', snapshot => {
            this.setState({ data: snapshot.val() });
    });
  }

  addMessage(e) {
    e.preventDefault();
    const Messages = firebase.database().ref().child('startertemplate/testmessages');
    const txt = document.getElementById('messageInput').value;
    const messagetxt = {
      message_text: txt,
      sender: this.state.loggedInUser };
    Messages.push(messagetxt);
  }

  render() {
    return (
      <div id="AppDiv">
        <h1>starter template chat app</h1>
        <MessageList messages={this.state.data.testmessages} />
        <NewMessage title="hello" addMessageFunction={this.addMessage.bind(this)} />
      </div>

    );
  }
}

export default App;
