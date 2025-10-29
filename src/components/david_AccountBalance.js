import React, { Component } from 'react';

class DavidAccountBalance extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h3 style={styles.balance}>Balance: ${this.props.accountBalance.toFixed(2)}</h3>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '10px',
  },
  balance: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#28a745',
    fontWeight: '600',
  },
};

export default DavidAccountBalance;

