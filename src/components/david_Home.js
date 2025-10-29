import React, { Component } from 'react';
import DavidAccountBalance from './david_AccountBalance';
import { Link } from 'react-router-dom';

class DavidHome extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>David's Bank</h1>
          <p style={styles.tagline}>Simple. Clean. Yours.</p>
        </div>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Landing</Link>
          <span style={styles.separator}>|</span>
          <Link to="/mybank/userProfile" style={styles.link}>User Profile</Link>
          <span style={styles.separator}>|</span>
          <Link to="/mybank/login" style={styles.link}>Login</Link>
          <span style={styles.separator}>|</span>
          <Link to="/mybank/credits" style={styles.link}>Credits</Link>
          <span style={styles.separator}>|</span>
          <Link to="/mybank/debits" style={styles.link}>Debits</Link>
        </nav>

        <div style={styles.balanceCard}>
          <DavidAccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '40px 20px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  tagline: {
    marginTop: '6px',
    color: '#666',
    fontSize: '0.95rem',
  },
  nav: {
    margin: '20px 0 30px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    padding: '0 8px',
  },
  separator: {
    color: '#bbb',
    padding: '0 6px',
  },
  balanceCard: {
    display: 'inline-block',
    padding: '16px 24px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
  },
};

export default DavidHome;

