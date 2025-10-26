import React, { Component } from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <h3>Balance: ${this.props.accountBalance.toFixed(2)}</h3>
      </div>
    );
  }
}

export default AccountBalance;