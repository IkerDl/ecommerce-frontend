import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: this.props.isUserLoggedIn,
    };
  }

  handleLogout = () => {
    this.props.onLogout();
    this.setState({ isUserLoggedIn: false });
  };

  render() {

    return (
      <div className='navbar-wrapper'>
        
        <div className='logo-container'>
          <Link to="/">
            <img src="/assets/logo.jpg" alt="logo" />
          </Link>
        </div>

        <div className='right-column'>
          <div className='auth-container'>
            {this.props.isUserLoggedIn ? (
              <div>
                <Link to="/"onClick={this.handleLogout}>
                  Log Out
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/auth">Login</Link>
              </div>
            )}
          </div>
          

          <div className='cart-icon' >
            <Link to ="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            
          </div>
        </div>
        
      </div>
    );
  }
}
