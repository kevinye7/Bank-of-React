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
        <h1 style={styles.title}>Credits</h1>
        
        <div style={styles.balanceSection}>
          <DavidAccountBalance accountBalance={accountBalance} />
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Add New Credit</h2>
          <form onSubmit={this.handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Description: </label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Amount: </label>
              <input
                type="number"
                step="0.01"
                value={this.state.amount}
                onChange={this.handleAmountChange}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Add Credit</button>
          </form>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Credit History</h2>
          <ul style={styles.list}>
            {credits.map(credit => (
              <li key={credit.id} style={styles.listItem}>
                Description: {credit.description} | 
                Amount: ${credit.amount.toFixed(2)} | 
                Date: {credit.date}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/mybank" style={styles.link}>Return to Home</Link>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '40px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  balanceSection: {
    marginBottom: '30px',
  },
  section: {
    marginBottom: '30px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
    maxWidth: '600px',
    margin: '0 auto 30px',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  form: {
    display: 'inline-block',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid #eee',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default DavidCredits;

