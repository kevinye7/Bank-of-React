import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KevinAccountBalance from './kevin_AccountBalance';

class KevinDebits extends Component {
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
      this.props.addDebit(this.state.description, this.state.amount);
      this.setState({ description: '', amount: '' });
    }
  }

  render() {
    const { debits, accountBalance } = this.props;

    return (
      <div>
        <h1>Debits</h1>
        
        <KevinAccountBalance accountBalance={accountBalance} />
        
        <div>
          <h2>Add New Debit</h2>
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
            <button type="submit">Add Debit</button>
          </form>
        </div>

        <div>
          <h2>Debit History</h2>
          <ul>
            {debits.map(debit => (
              <li key={debit.id}>
                Description: {debit.description} | 
                Amount: ${debit.amount.toFixed(2)} | 
                Date: {debit.date}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/bank">Return to Home</Link>
      </div>
    );
  }
}

export default KevinDebits;