/*==================================================
src/components/Login.js

The LogIn component is used to demonstrate the use of Redirect.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

class KevinLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        userName: this.props.user.userName,
        email: this.props.user.email || '',
        password: ''
      },
      redirect: false,
      errors: {}
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = {...this.state.user};
    updatedUser[name] = value;
    this.setState({user: updatedUser})
    
    // Clear error when user starts typing
    if (this.state.errors[name]) {
      const errors = {...this.state.errors};
      delete errors[name];
      this.setState({errors});
    }
  }

  validate = () => {
    const errors = {};
    if (!this.state.user.userName.trim()) {
      errors.userName = 'Username is required';
    }
    if (!this.state.user.password) {
      errors.password = 'Password is required';
    }
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate();
    
    if (Object.keys(errors).length > 0) {
      this.setState({errors});
      return;
    }
    
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }
  
  render () {
    if (this.state.redirect) {  
      return (<Redirect to="/bank/userProfile"/>);
    }

    return (
      <div style={styles.container}>
        <div style={styles.tile}>
          <h1 style={styles.title}>Login</h1>
          <p style={styles.subtitle}>Sign in to access your account</p>
          
          <form onSubmit={this.handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>User Name *</label>
              <input 
                type="text" 
                name="userName" 
                value={this.state.user.userName}
                onChange={this.handleChange}
                style={{
                  ...styles.input,
                  ...(this.state.errors.userName ? styles.inputError : {})
                }}
                placeholder="Enter your username"
              />
              {this.state.errors.userName && (
                <div style={styles.error}>{this.state.errors.userName}</div>
              )}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email (optional)</label>
              <input 
                type="email" 
                name="email" 
                value={this.state.user.email}
                onChange={this.handleChange}
                style={styles.input}
                placeholder="your.email@example.com"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password *</label>
              <input 
                type="password" 
                name="password"
                value={this.state.user.password}
                onChange={this.handleChange}
                style={{
                  ...styles.input,
                  ...(this.state.errors.password ? styles.inputError : {})
                }}
                placeholder="Enter your password"
              />
              {this.state.errors.password && (
                <div style={styles.error}>{this.state.errors.password}</div>
              )}
            </div>
            <button type="submit" style={styles.submitButton}>Log In</button>
          </form>
          
          <Link to="/bank" style={styles.backLink}>← Back to Home</Link>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '32px',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e40af',
    marginTop: 0,
    marginBottom: '8px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '0.9375rem',
    color: '#6b7280',
    textAlign: 'center',
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
    gap: '8px',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
  },
  inputError: {
    borderColor: '#dc2626',
  },
  error: {
    color: '#dc2626',
    fontSize: '0.875rem',
    marginTop: '4px',
  },
  submitButton: {
    padding: '12px 24px',
    backgroundColor: '#1e40af',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '8px',
  },
  backLink: {
    display: 'block',
    textAlign: 'center',
    color: '#1e40af',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    fontWeight: '600',
    marginTop: '24px',
  },
};

export default KevinLogin;
