import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

class Home extends Component {
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

        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;