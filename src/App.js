import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

// Kevin's components
import KevinHome from './components/kevin_Home';
import KevinUserProfile from './components/kevin_UserProfile';
import KevinLogin from './components/kevin_Login';
import KevinCredits from './components/kevin_Credits';
import KevinDebits from './components/kevin_Debits';

// David's components
import DavidHome from './components/david_Home';
import DavidUserProfile from './components/david_UserProfile';
import DavidLogin from './components/david_Login';
import DavidCredits from './components/david_Credits';
import DavidDebits from './components/david_Debits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      credits: [],
      debits: [],
      kevinUser: {
        userName: 'Kevin User',
        email: 'kevin@example.com',
        memberSince: '11/22/99',
      },
      davidUser: {
        userName: 'David User',
        email: 'david@example.com',
        memberSince: '01/15/20',
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

  mockLogInKevin = (logInInfo) => {
    const newUser = { ...this.state.kevinUser };
    newUser.userName = logInInfo.userName;
    if (logInInfo.email) {
      newUser.email = logInInfo.email;
    }
    this.setState({ kevinUser: newUser });
  }

  mockLogInDavid = (logInInfo) => {
    const newUser = { ...this.state.davidUser };
    newUser.userName = logInInfo.userName;
    if (logInInfo.email) {
      newUser.email = logInInfo.email;
    }
    this.setState({ davidUser: newUser });
  }

  render() {
    const LandingPageComponent = () => (
      <LandingPage />
    );

    // Kevin's bank components
    const KevinHomeComponent = () => (
      <KevinHome accountBalance={this.state.accountBalance} />
    );

    const KevinUserProfileComponent = () => (
      <KevinUserProfile
        userName={this.state.kevinUser.userName}
        email={this.state.kevinUser.email}
        memberSince={this.state.kevinUser.memberSince}
      />
    );

    const KevinLoginComponent = () => (
      <KevinLogin user={this.state.kevinUser} mockLogIn={this.mockLogInKevin} />
    );

    const KevinCreditsComponent = () => (
      <KevinCredits
        credits={this.state.credits}
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );

    const KevinDebitsComponent = () => (
      <KevinDebits
        debits={this.state.debits}
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    );

    // David's bank components
    const DavidHomeComponent = () => (
      <DavidHome accountBalance={this.state.accountBalance} />
    );

    const DavidUserProfileComponent = () => (
      <DavidUserProfile
        userName={this.state.davidUser.userName}
        email={this.state.davidUser.email}
        memberSince={this.state.davidUser.memberSince}
      />
    );

    const DavidLoginComponent = () => (
      <DavidLogin user={this.state.davidUser} mockLogIn={this.mockLogInDavid} />
    );

    const DavidCreditsComponent = () => (
      <DavidCredits
        credits={this.state.credits}
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );

    const DavidDebitsComponent = () => (
      <DavidDebits
        debits={this.state.debits}
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    );

    return (
      <Router basename="/Bank-of-React">
        <div>
          <Route exact path="/" render={LandingPageComponent} />
          
          {/* Kevin's bank routes */}
          <Route exact path="/bank" render={KevinHomeComponent} />
          <Route exact path="/bank/userProfile" render={KevinUserProfileComponent} />
          <Route exact path="/bank/login" render={KevinLoginComponent} />
          <Route exact path="/bank/credits" render={KevinCreditsComponent} />
          <Route exact path="/bank/debits" render={KevinDebitsComponent} />
          
          {/* David's bank routes */}
          <Route exact path="/mybank" render={DavidHomeComponent} />
          <Route exact path="/mybank/userProfile" render={DavidUserProfileComponent} />
          <Route exact path="/mybank/login" render={DavidLoginComponent} />
          <Route exact path="/mybank/credits" render={DavidCreditsComponent} />
          <Route exact path="/mybank/debits" render={DavidDebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
