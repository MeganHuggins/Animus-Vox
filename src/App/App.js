import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import Header from '../Header/Header';
import HomeContainer from '../HomeContainer/HomeContainer';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
          userName: ''
        },
      isLoggedIn: false,
      playList: [],
      moods: ['Sad/Introspective', 'Happy/Energetic', 'Chill/Focused', 'Angry/Rebellious'],
      currentMood: '',
    }
  }

  setUserInfo = (name) => {
    this.setState({
      userInfo: {
        userName: name
      },
      isLoggedIn: true
    });
  };



  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          {!this.state.isLoggedIn ?
           <Redirect to = '/'/>
          : <Redirect to = '/home'/>}

          <Route exact path='/home' >
            <HomeContainer moods={this.state.moods} userInfo={this.state.userInfo} />
          </Route>

          <Route exact path='/home/:id/moods' >
            <PlaylistContainer />
          </Route>

          <Route exact path='/' >
            <LoginPage setUserInfo={this.setUserInfo} />
          </Route>
        </BrowserRouter>
      </main>
    )
  }
}


export default App;
