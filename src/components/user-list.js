import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const MessageListItem = styled.ul`
  list-style: none;
`;


class UserList extends Component {
  renderList() {
    return _.map(this.props.users, (value, key) => {
      return (
        <li key={key}>{value.first_name} {value.last_name}</li>
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

export default UserList;
