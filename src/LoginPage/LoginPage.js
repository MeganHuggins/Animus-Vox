import React, { Component } from 'react';
import './LoginPage.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  handleUserInfo = (e) => {
    e.preventDefault();
    const { value } = e.target
      this.setState({ userName: value });
  }

  handleLogIn = (e) => {
    e.preventDefault();
    if (this.state.userName) {
      this.props.setUserInfo(this.state.userName)
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-headers">
          <h1 className="main-header">Animus Vox</h1>
          <h3 className="sub-header">The Sound of the Soul</h3>
        </div>
        <form onSubmit={(e) => this.handleLogIn(e)} className='login-form' action='#' method=''>
          <input id='user-name' onChange={(e) => this.handleUserInfo(e)} className='username' type='text' required placeholder='Name' value={this.state.value} />
          <button aria-label='submit' className='login-btn'>Enter</button>
        </form>
      </div>
    )
  }

}
