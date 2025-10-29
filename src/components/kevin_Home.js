import React, { Component } from 'react';
import KevinAccountBalance from './kevin_AccountBalance';
import { Link } from 'react-router-dom';

class KevinHome extends Component {
  render() {
    return (
      <div>
        <img src="https://picsum.photos/200/200" alt="bank" />
        <h1>Bank of React</h1>

        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/bank/userProfile">User Profile</Link>| 
          <Link to="/bank/login">Login</Link>| 
          <Link to="/bank/credits">Credits</Link>| 
          <Link to="/bank/debits">Debits</Link>
        </nav>

        <KevinAccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default KevinHome;