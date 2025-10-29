import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KevinAccountBalance from './kevin_AccountBalance';

class KevinCredits extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      amount: ''
    };
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.description && this.state.amount) {
      this.props.addCredit(this.state.description, this.state.amount);
      this.setState({ description: '', amount: '' });
    }
  }

  render() {
    const { credits, accountBalance } = this.props;

    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Credits</h1>
          <Link to="/bank" style={styles.backLink}>← Back to Home</Link>
        </header>

        <div style={styles.balanceTile}>
          <KevinAccountBalance accountBalance={accountBalance} />
        </div>

        <div style={styles.tile}>
          <h2 style={styles.sectionTitle}>Add New Credit</h2>
          <form onSubmit={this.handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Description</label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                required
                style={styles.input}
                placeholder="Enter credit description"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Amount</label>
              <input
                type="number"
                step="0.01"
                value={this.state.amount}
                onChange={this.handleAmountChange}
                required
                style={styles.input}
                placeholder="0.00"
              />
            </div>
            <button type="submit" style={styles.submitButton}>Add Credit</button>
          </form>
        </div>

        <div style={styles.tile}>
          <h2 style={styles.sectionTitle}>Credit History</h2>
          <div style={styles.transactionList}>
            {credits.length === 0 ? (
              <p style={styles.emptyMessage}>No credits yet. Add your first credit above.</p>
            ) : (
              credits.map(credit => (
                <div key={credit.id} style={styles.transactionCard}>
                  <div style={styles.transactionHeader}>
                    <span style={styles.transactionDesc}>{credit.description}</span>
                    <span style={styles.transactionAmount}>+${credit.amount.toFixed(2)}</span>
                  </div>
                  <div style={styles.transactionDate}>{credit.date}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    padding: '32px 24px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e40af',
    margin: '0 0 16px 0',
  },
  backLink: {
    color: '#1e40af',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    fontWeight: '600',
  },
  balanceTile: {
    maxWidth: '400px',
    margin: '0 auto 32px',
  },
  tile: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 0,
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
  },
  submitButton: {
    padding: '12px 24px',
    backgroundColor: '#059669',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  transactionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  transactionCard: {
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  transactionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  transactionDesc: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
  },
  transactionAmount: {
    fontSize: '1.125rem',
    fontWeight: '700',
    color: '#059669',
  },
  transactionDate: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '24px',
  },
};

export default KevinCredits;
