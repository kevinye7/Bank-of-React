import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

class DavidLogin extends Component {
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
      return (<Redirect to="/mybank/userProfile"/>);
    }

    return (
      <div style={styles.container}>
        <div style={styles.tile}>
          <div style={styles.loginHeader}>
            <h1 style={styles.title}>Welcome Back</h1>
            <p style={styles.subtitle}>Sign in to access your account</p>
          </div>
          
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
            <button type="submit" style={styles.submitButton}>Sign In</button>
          </form>
          
          <Link to="/mybank" style={styles.backLink}>← Back to Home</Link>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '28px',
    maxWidth: '450px',
    width: '100%',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
  },
  loginHeader: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: '#1f2937',
    marginTop: 0,
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '0.9375rem',
    color: '#6b7280',
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  label: {
    fontSize: '0.9375rem',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
  },
  inputError: {
    borderColor: '#dc2626',
    backgroundColor: '#fef2f2',
  },
  error: {
    color: '#dc2626',
    fontSize: '0.875rem',
    marginTop: '4px',
    fontWeight: '500',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#111827',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '8px',
  },
  backLink: {
    display: 'block',
    textAlign: 'center',
    color: '#374151',
    textDecoration: 'none',
    fontSize: '0.9375rem',
    fontWeight: '600',
    marginTop: '24px',
  },
};

export default DavidLogin;
