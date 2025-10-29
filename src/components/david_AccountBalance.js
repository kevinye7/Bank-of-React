import React, { Component } from 'react';

class DavidAccountBalance extends Component {
  render() {
    const balance = this.props.accountBalance;
    const isPositive = balance >= 0;

    return (
      <div style={styles.container}>
        <div style={styles.label}>Current Balance</div>
        <div style={{
          ...styles.amount,
          ...(isPositive ? styles.positive : styles.negative)
        }}>
          ${balance.toFixed(2)}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
    textAlign: 'center',
    marginBottom: '24px',
  },
  label: {
    fontSize: '0.875rem',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '8px',
    fontWeight: '600',
  },
  amount: {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#111827',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  positive: {
    color: '#065f46',
  },
  negative: {
    color: '#b91c1c',
  },
};

export default DavidAccountBalance;
