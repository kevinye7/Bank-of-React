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
        <h1 style={styles.title}>User Profile</h1>

        <div style={styles.profileCard}>
          <div style={styles.infoRow}>
            <strong>Username:</strong> {this.props.userName}
          </div>
          {this.props.email && (
            <div style={styles.infoRow}>
              <strong>Email:</strong> {this.props.email}
            </div>
          )}
          <div style={styles.infoRow}>
            <strong>Member Since:</strong> {this.props.memberSince}
          </div>
        </div>
        
        <br/>
        <Link to="/bank" style={styles.link}>Return to Home</Link>
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
  profileCard: {
    display: 'inline-block',
    padding: '20px 30px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
    textAlign: 'left',
  },
  infoRow: {
    margin: '12px 0',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default KevinUserProfile;
