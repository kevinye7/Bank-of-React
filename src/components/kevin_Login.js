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
        <h1 style={styles.title}>Login</h1>
        
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
            />
            {this.state.errors.password && (
              <div style={styles.error}>{this.state.errors.password}</div>
            )}
          </div>
          <button type="submit" style={styles.button}>Log In</button>
        </form>  
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
    marginBottom: '30px',
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    minWidth: '280px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  inputError: {
    borderColor: '#dc3545',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    width: '100%',
    marginTop: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  error: {
    color: '#dc3545',
    fontSize: '0.875rem',
    marginTop: '4px',
  },
};

export default KevinLogin;
