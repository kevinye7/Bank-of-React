import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KevinAccountBalance from './kevin_AccountBalance';

class KevinCredits extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      amount: ''
    };
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.description && this.state.amount) {
      this.props.addCredit(this.state.description, this.state.amount);
      this.setState({ description: '', amount: '' });
    }
  }

  render() {
    const { credits, accountBalance } = this.props;

    return (
      <div>
        <h1>Credits</h1>
        
        <KevinAccountBalance accountBalance={accountBalance} />
        
        <div>
          <h2>Add New Credit</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Description: </label>
              <input
                type="text"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                required
              />
            </div>
            <div>
              <label>Amount: </label>
              <input
                type="number"
                step="0.01"
                value={this.state.amount}
                onChange={this.handleAmountChange}
                required
              />
            </div>
            <button type="submit">Add Credit</button>
          </form>
        </div>

        <div>
          <h2>Credit History</h2>
          <ul>
            {credits.map(credit => (
              <li key={credit.id}>
                Description: {credit.description} | 
                Amount: ${credit.amount.toFixed(2)} | 
                Date: {credit.date}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/bank">Return to Home</Link>
      </div>
    );
  }
}

export default KevinCredits;