import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <header className='header'>
        <div className='logo-home-btn'>
          <img className='logo' src={logo} alt='heart with music notes' />
          <Link to={'/home'}>
            <button
            className='home-btn'
            onClick={() => this.props.resetCurrentMood()}
            >
            Home
            </button>
          </Link>
        </div>
        <button
        className='logout-btn'
        onClick={() => this.props.logOut()}
        >
        Log Out
        </button>
      </header>
    )
  }
}
