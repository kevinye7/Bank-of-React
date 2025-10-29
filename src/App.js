import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      credits: [],
      debits: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  async componentDidMount() {
    try {
      // Fetch credits data
      const creditsResponse = await fetch('https://johnnylaicode.github.io/api/credits.json');
      const creditsData = await creditsResponse.json();
      
      // Fetch debits data
      const debitsResponse = await fetch('https://johnnylaicode.github.io/api/debits.json');
      const debitsData = await debitsResponse.json();
      
      this.setState({
        credits: creditsData,
        debits: debitsData
      }, this.calculateBalance);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  calculateBalance = () => {
    const totalCredits = this.state.credits.reduce((total, credit) => total + credit.amount, 0);
    const totalDebits = this.state.debits.reduce((total, debit) => total + debit.amount, 0);
    const accountBalance = totalCredits - totalDebits;
    
    this.setState({ accountBalance: parseFloat(accountBalance.toFixed(2)) });
  }

  addCredit = (description, amount) => {
    const newCredit = {
      id: this.state.credits.length + 1,
      description: description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0] // yyyy-mm-dd format
    };

    this.setState(prevState => ({
      credits: [...prevState.credits, newCredit]
    }), this.calculateBalance);
  }

  addDebit = (description, amount) => {
    const newDebit = {
      id: this.state.debits.length + 1,
      description: description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0] // yyyy-mm-dd format
    };

    this.setState(prevState => ({
      debits: [...prevState.debits, newDebit]
    }), this.calculateBalance);
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  }

  render() {
    const LandingPageComponent = () => (
      <LandingPage />
    );

    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (
      <Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );

    const CreditsComponent = () => (
      <Credits
        credits={this.state.credits}
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );

    const DebitsComponent = () => (
      <Debits
        debits={this.state.debits}
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    );

    return (
      <Router basename="/Bank-of-React">
        <div>
          <Route exact path="/" render={LandingPageComponent} />
          <Route exact path="/bank" render={HomeComponent} />
          <Route exact path="/bank/userProfile" render={UserProfileComponent} />
          <Route exact path="/bank/login" render={LogInComponent} />
          <Route exact path="/bank/credits" render={CreditsComponent} />
          <Route exact path="/bank/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;