import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DavidUserProfile extends Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>User Profile</h1>
          <Link to="/mybank" style={styles.backLink}>← Back to Home</Link>
        </header>

        <div style={styles.tile}>
          <div style={styles.profileHeader}>
            <h2 style={styles.profileName}>{this.props.userName}</h2>
          </div>
          
          <div style={styles.profileSection}>
            <div style={styles.profileField}>
              <div style={styles.fieldContent}>
                <span style={styles.fieldLabel}>Username</span>
                <span style={styles.fieldValue}>{this.props.userName}</span>
              </div>
            </div>
            {this.props.email && (
              <div style={styles.profileField}>
                <div style={styles.fieldContent}>
                  <span style={styles.fieldLabel}>Email</span>
                  <span style={styles.fieldValue}>{this.props.email}</span>
                </div>
              </div>
            )}
            <div style={styles.profileField}>
              <div style={styles.fieldContent}>
                <span style={styles.fieldLabel}>Member Since</span>
                <span style={styles.fieldValue}>{this.props.memberSince}</span>
              </div>
            </div>
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
    color: '#764ba2',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    fontWeight: '600',
  },
  tile: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '24px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
  },
  profileHeader: {
    textAlign: 'center',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid #e5e7eb',
  },
  profileName: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#764ba2',
    margin: 0,
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  profileField: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  fieldContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
  },
  fieldLabel: {
    fontSize: '0.8125rem',
    fontWeight: '600',
    color: '#764ba2',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  fieldValue: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
  },
};

export default DavidUserProfile;
