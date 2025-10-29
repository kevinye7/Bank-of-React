import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Bank of React</h1>
        <p style={styles.subtitle}>Choose which bank you'd like to access:</p>
        
        <div style={styles.bankContainer}>
          <div style={styles.bankCard}>
            <h2 style={styles.bankName}>David's Bank</h2>
            <p style={styles.bankDescription}>Access your personal banking portal</p>
            <Link to="/mybank" style={styles.button}>
              Go to David's Bank
            </Link>
          </div>
          
          <div style={styles.bankCard}>
            <h2 style={styles.bankName}>Kevin's Bank</h2>
            <p style={styles.bankDescription}>Access Kevin's banking portal</p>
            <a 
              href="https://kevinye7.github.io/Bank-of-React/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.button}
            >
              Go to Kevin's Bank
            </a>
          </div>
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
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '40px',
  },
  bankContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '600px',
    margin: '0 auto',
  },
  bankCard: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    minWidth: '200px',
  },
  bankName: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  bankDescription: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default LandingPage;

