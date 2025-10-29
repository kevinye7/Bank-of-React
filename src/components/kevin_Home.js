import React, { Component } from 'react';
import KevinAccountBalance from './kevin_AccountBalance';
import { Link } from 'react-router-dom';

class KevinHome extends Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Kevin's Bank</h1>
          <p style={styles.tagline}>Your trusted banking partner</p>
        </header>

        <div style={styles.balanceTile}>
          <KevinAccountBalance accountBalance={this.props.accountBalance} />
        </div>

        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Landing</Link>
          <Link to="/bank/userProfile" style={styles.navLink}>Profile</Link>
          <Link to="/bank/login" style={styles.navLink}>Login</Link>
          <Link to="/bank/credits" style={styles.navLink}>Credits</Link>
          <Link to="/bank/debits" style={styles.navLink}>Debits</Link>
        </nav>
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
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1e40af',
    margin: 0,
    marginBottom: '8px',
  },
  tagline: {
    fontSize: '1rem',
    color: '#6b7280',
    margin: 0,
  },
  balanceTile: {
    maxWidth: '400px',
    margin: '0 auto 32px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  navLink: {
    padding: '12px 24px',
    backgroundColor: '#ffffff',
    color: '#1e40af',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.9375rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    border: '1px solid #e5e7eb',
  },
};

export default KevinHome;
