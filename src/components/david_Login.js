import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

class DavidLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        userName: this.props.user.userName,
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user};
    updatedUser.userName = e.target.value;
    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }
  
  render () {
    if (this.state.redirect) {  
      return (<Redirect to="/mybank/userProfile"/>);
    }

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Login</h1>
        
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>User Name</label>
            <input 
              type="text" 
              name="userName" 
              defaultValue={this.props.user.userName} 
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              name="password"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Log In</button>
        </form>  
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
    marginBottom: '30px',
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
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
    width: '200px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
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
};

export default DavidLogin;

