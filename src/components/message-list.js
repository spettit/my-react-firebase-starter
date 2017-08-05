import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const MessageListItem = styled.ul`
  list-style: none;
`;

class MessageList extends Component {
  renderList() {
    return _.map(this.props.messages, (value, key) => {
      return (
        <li key={key}>Message from {value.sender}: "{value.message_text}"</li>
      );
    });
  }

  render() {
    return (
      <MessageListItem>
        {this.renderList()}
      </MessageListItem>
    );
  }
}

export default MessageList;
