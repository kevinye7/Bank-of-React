/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class KevinUserProfile extends Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>User Profile</h1>
          <Link to="/bank" style={styles.backLink}>← Back to Home</Link>
        </header>

        <div style={styles.tile}>
          <div style={styles.profileSection}>
            <div style={styles.profileField}>
              <span style={styles.fieldLabel}>Username</span>
              <span style={styles.fieldValue}>{this.props.userName}</span>
            </div>
            {this.props.email && (
              <div style={styles.profileField}>
                <span style={styles.fieldLabel}>Email</span>
                <span style={styles.fieldValue}>{this.props.email}</span>
              </div>
            )}
            <div style={styles.profileField}>
              <span style={styles.fieldLabel}>Member Since</span>
              <span style={styles.fieldValue}>{this.props.memberSince}</span>
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
  tile: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '32px',
    maxWidth: '500px',
    margin: '0 auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  profileField: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e5e7eb',
  },
  fieldLabel: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  fieldValue: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
  },
};

export default KevinUserProfile;
