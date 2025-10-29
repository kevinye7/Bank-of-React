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
      // Kevin bank state
      kevinCredits: [],
      kevinDebits: [],
      kevinBalance: 0,
      kevinAuthenticated: false,
      kevinUser: {
        userName: 'Kevin User',
        email: 'kevin@example.com',
        memberSince: '11/22/99',
      },
      // David bank state
      davidCredits: [],
      davidDebits: [],
      davidBalance: 0,
      davidAuthenticated: false,
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
      
      // Initialize both banks with fetched data (independent copies)
      this.setState({
        kevinCredits: creditsData,
        kevinDebits: debitsData,
        davidCredits: creditsData,
        davidDebits: debitsData,
      }, () => {
        this.calculateKevinBalance();
        this.calculateDavidBalance();
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  calculateKevinBalance = () => {
    const totalCredits = this.state.kevinCredits.reduce((total, credit) => total + credit.amount, 0);
    const totalDebits = this.state.kevinDebits.reduce((total, debit) => total + debit.amount, 0);
    const kevinBalance = totalCredits - totalDebits;
    this.setState({ kevinBalance: parseFloat(kevinBalance.toFixed(2)) });
  }

  calculateDavidBalance = () => {
    const totalCredits = this.state.davidCredits.reduce((total, credit) => total + credit.amount, 0);
    const totalDebits = this.state.davidDebits.reduce((total, debit) => total + debit.amount, 0);
    const davidBalance = totalCredits - totalDebits;
    this.setState({ davidBalance: parseFloat(davidBalance.toFixed(2)) });
  }

  addKevinCredit = (description, amount) => {
    const newCredit = {
      id: this.state.kevinCredits.length + 1,
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0]
    };
    this.setState(prevState => ({
      kevinCredits: [...prevState.kevinCredits, newCredit]
    }), this.calculateKevinBalance);
  }

  addDavidCredit = (description, amount) => {
    const newCredit = {
      id: this.state.davidCredits.length + 1,
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0]
    };
    this.setState(prevState => ({
      davidCredits: [...prevState.davidCredits, newCredit]
    }), this.calculateDavidBalance);
  }

  addKevinDebit = (description, amount) => {
    const newDebit = {
      id: this.state.kevinDebits.length + 1,
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0]
    };
    this.setState(prevState => ({
      kevinDebits: [...prevState.kevinDebits, newDebit]
    }), this.calculateKevinBalance);
  }

  addDavidDebit = (description, amount) => {
    const newDebit = {
      id: this.state.davidDebits.length + 1,
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0]
    };
    this.setState(prevState => ({
      davidDebits: [...prevState.davidDebits, newDebit]
    }), this.calculateDavidBalance);
  }

  mockLogInKevin = (logInInfo) => {
    const newUser = { ...this.state.kevinUser };
    newUser.userName = logInInfo.userName;
    if (logInInfo.email) {
      newUser.email = logInInfo.email;
    }
    this.setState({ kevinUser: newUser, kevinAuthenticated: true });
  }

  mockLogInDavid = (logInInfo) => {
    const newUser = { ...this.state.davidUser };
    newUser.userName = logInInfo.userName;
    if (logInInfo.email) {
      newUser.email = logInInfo.email;
    }
    this.setState({ davidUser: newUser, davidAuthenticated: true });
  }

  render() {
    const LandingPageComponent = () => (
      <LandingPage />
    );

    // Kevin's bank components
    const KevinHomeComponent = () => (
      this.state.kevinAuthenticated
        ? <KevinHome accountBalance={this.state.kevinBalance} />
        : <KevinLogin user={this.state.kevinUser} mockLogIn={this.mockLogInKevin} />
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
      this.state.kevinAuthenticated
        ? (
          <KevinCredits
            credits={this.state.kevinCredits}
            addCredit={this.addKevinCredit}
            accountBalance={this.state.kevinBalance}
          />
        ) : <KevinLogin user={this.state.kevinUser} mockLogIn={this.mockLogInKevin} />
    );

    const KevinDebitsComponent = () => (
      this.state.kevinAuthenticated
        ? (
          <KevinDebits
            debits={this.state.kevinDebits}
            addDebit={this.addKevinDebit}
            accountBalance={this.state.kevinBalance}
          />
        ) : <KevinLogin user={this.state.kevinUser} mockLogIn={this.mockLogInKevin} />
    );

    // David's bank components
    const DavidHomeComponent = () => (
      this.state.davidAuthenticated
        ? <DavidHome accountBalance={this.state.davidBalance} />
        : <DavidLogin user={this.state.davidUser} mockLogIn={this.mockLogInDavid} />
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
      this.state.davidAuthenticated
        ? (
          <DavidCredits
            credits={this.state.davidCredits}
            addCredit={this.addDavidCredit}
            accountBalance={this.state.davidBalance}
          />
        ) : <DavidLogin user={this.state.davidUser} mockLogIn={this.mockLogInDavid} />
    );

    const DavidDebitsComponent = () => (
      this.state.davidAuthenticated
        ? (
          <DavidDebits
            debits={this.state.davidDebits}
            addDebit={this.addDavidDebit}
            accountBalance={this.state.davidBalance}
          />
        ) : <DavidLogin user={this.state.davidUser} mockLogIn={this.mockLogInDavid} />
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
