import React from 'react';
import Button from '@material-ui/core/Button';
import Greeting from './greet';
import Link from '@material-ui/core/Link';

function LoginButton(props) {
    return <Button onClick={props.onClick}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            margin="theme.spacing(10, 0, 10)" 
            >
    <Link color="inherit" >
      Sign In
    </Link>
  </Button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if(isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
      </div>
    );
  }
}

export default LoginControl;