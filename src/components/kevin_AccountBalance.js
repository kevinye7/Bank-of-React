import React, { Component } from 'react';

class KevinAccountBalance extends Component {
  render() {
    const balance = this.props.accountBalance;
    const isPositive = balance >= 0;
    
    return (
      <div style={styles.container}>
        <div style={styles.label}>Account Balance</div>
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
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
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
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  positive: {
    color: '#059669',
  },
  negative: {
    color: '#dc2626',
  },
};

export default KevinAccountBalance;
