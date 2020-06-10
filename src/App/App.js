import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import HomeContainer from '../HomeContainer/HomeContainer';
import OptionsPage from '../OptionsPage/OptionsPage';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
          userName: ''
        },
      isLoggedIn: false,
      moods: [{type: 'Sad/Introspective', id: 0, statement:'Let’s Let It Out' }, {type: 'Happy/Energetic', id: 1, statement: 'Let’s Get Hyped'}, {type: 'Chill/Focused', id: 2, statement:'Let’s Chill Out'}, {type: 'Angry/Rebellious', id: 3, statement: 'Let’s Rage' }],
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

  setCurrentMood = (selectedMood) => {
    this.setState({
      currentMood: selectedMood
    });
  };

  resetCurrentMood = () => {
    this.setState({
      currentMood: ''
    })
  }

  logOut = () => {
    this.setState({
      userInfo: {
        username: ''
      },
      isLoggedIn: false,
    })
  };

  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          {!this.state.isLoggedIn ?
           <Redirect to = '/'/>
          : <Redirect to = '/home'/>}

          <Route exact path='/home' >
            <HomeContainer setCurrentMood={this.setCurrentMood}
                          moods={this.state.moods}
                          userInfo={this.state.userInfo}
                          />
          </Route>

          <Route exact path='/home/:id/moods' render={({ match }) =>
            <OptionsPage
                        allMoods={this.state.moods}
                        currentMood={this.state.currentMood}
                        moodId={(parseInt(match.params.id))}
                        resetCurrentMood={this.resetCurrentMood}
                        logOut={this.logOut}
                        />}

                        />

          <Route exact path='/home/playlist/:id/' render={({ match }) =>
            <PlaylistContainer
                        playlistId={(parseInt(match.params.id))}
                        logOut={this.logOut}
                        resetCurrentMood={this.resetCurrentMood}
                        />}

                        />

          <Route exact path='/' >
            <LoginPage setUserInfo={this.setUserInfo} />
          </Route>
        </BrowserRouter>
      </main>
    )
  }
}
