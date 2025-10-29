import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DavidAccountBalance from './david_AccountBalance';

class DavidCredits extends Component {
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
          <Link to="/mybank" style={styles.backLink}>← Back to Home</Link>
        </header>

        <div style={styles.balanceTile}>
          <DavidAccountBalance accountBalance={accountBalance} />
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
            <button type="submit" style={styles.submitButton}>
              <span style={styles.buttonIcon}>➕</span>
              Add Credit
            </button>
          </form>
        </div>

        <div style={styles.tile}>
          <h2 style={styles.sectionTitle}>Credit History</h2>
          <div style={styles.transactionGrid}>
            {credits.length === 0 ? (
              <p style={styles.emptyMessage}>No credits yet. Add your first credit above.</p>
            ) : (
              credits.map(credit => (
                <div key={credit.id} style={styles.transactionTile}>
                  <div style={styles.transactionHeader}>
                    <div style={styles.transactionAmount}>+${credit.amount.toFixed(2)}</div>
                  </div>
                  <div style={styles.transactionDesc}>{credit.description}</div>
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
    backgroundColor: '#faf5ff',
    padding: '32px 24px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#1f2937',
    margin: '0 0 16px 0',
  },
  backLink: {
    color: '#374151',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    fontWeight: '600',
  },
  balanceTile: {
    maxWidth: '450px',
    margin: '0 auto 32px',
  },
  tile: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
    border: '1px solid #e5e7eb',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#764ba2',
    marginTop: 0,
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '0.9375rem',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#111827',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  transactionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px',
  },
  transactionTile: {
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  transactionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  transactionAmount: {
    fontSize: '1.125rem',
    fontWeight: '700',
    color: '#065f46',
  },
  transactionDesc: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px',
  },
  transactionDate: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#764ba2',
    padding: '32px',
    fontSize: '1rem',
  },
};

export default DavidCredits;
