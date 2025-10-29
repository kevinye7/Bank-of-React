import React, { Component } from 'react';
import DavidAccountBalance from './david_AccountBalance';
import { Link } from 'react-router-dom';

class DavidHome extends Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>David's Bank</h1>
          <p style={styles.tagline}>Simple. Clean. Yours.</p>
        </header>

        <div style={styles.balanceTile}>
          <DavidAccountBalance accountBalance={this.props.accountBalance} />
        </div>

        <div style={styles.navGrid}>
          <Link to="/" style={styles.navTile}><div style={styles.navLabel}>Landing</div></Link>
          <Link to="/mybank/userProfile" style={styles.navTile}><div style={styles.navLabel}>Profile</div></Link>
          <Link to="/mybank/login" style={styles.navTile}><div style={styles.navLabel}>Login</div></Link>
          <Link to="/mybank/credits" style={styles.navTile}><div style={styles.navLabel}>Credits</div></Link>
          <Link to="/mybank/debits" style={styles.navTile}><div style={styles.navLabel}>Debits</div></Link>
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
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '800',
    color: '#1f2937',
    margin: 0,
    marginBottom: '8px',
  },
  tagline: {
    fontSize: '1rem',
    color: '#6b7280',
    margin: 0,
    fontWeight: '500',
  },
  balanceTile: {
    maxWidth: '450px',
    margin: '0 auto 40px',
  },
  navGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '16px',
    maxWidth: '700px',
    margin: '0 auto',
  },
  navTile: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '16px',
    textDecoration: 'none',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #e5e7eb',
  },
  navLabel: {
    color: '#374151',
    fontWeight: '600',
    fontSize: '0.9375rem',
  },
};

export default DavidHome;
