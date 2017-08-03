import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 30px;
`;

class NewMessage extends Component {
  render() {
    return (
      <Div>
        <p>New Message</p>
        <form onSubmit={this.props.addMessageFunction}>
          <textarea id="messageInput" type="text" />
          <button type="submit">Send</button>
        </form>
      </Div>
    );
  }
}

export default NewMessage;
