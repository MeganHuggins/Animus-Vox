import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import Header from '../Header/Header';
import HomeContainer from '../HomeContainer/HomeContainer';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
          userName: ''
        },
      isLoggedIn: false,
      moods: [{type: 'Sad/Introspective', id: 0 }, {type: 'Happy/Energetic', id: 1}, {type: 'Chill/Focused', id: 2}, {type: 'Angry/Rebellious', id: 3}],
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
          <PlaylistContainer
                            allMoods={this.state.moods}
                            currentMood={this.state.currentMood}
                            moodId={(parseInt(match.params.id))}
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