import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DavidUserProfile extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>User Profile</h1>

        <div style={styles.infoCard}>
          <div style={styles.infoRow}>
            <strong>Username:</strong> {this.props.userName}
          </div>
          <div style={styles.infoRow}>
            <strong>Member Since:</strong> {this.props.memberSince}
          </div>
        </div>
        
        <br/>
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
  infoCard: {
    display: 'inline-block',
    padding: '20px 30px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
    marginBottom: '20px',
  },
  infoRow: {
    margin: '10px 0',
    fontSize: '1.1rem',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default DavidUserProfile;

