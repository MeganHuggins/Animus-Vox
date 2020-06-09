import React, { Component } from 'react';
import './PlaylistContainer.css';
import Header from '../Header/Header';
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import { fetchPlayList } from '../apiCalls';

export default class PlaylistContainer extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      playlistId: this.props.playlistId,
    }
  }

  componentDidMount = async () => {
    this._isMounted = true;

    const playlistId = this.state.playlistId

    fetchPlayList(playlistId)
      .then(data => {
        const updatedPlaylist = data.map(song => {
          const urlArray = song.eId.match(/(?<=#https:\/\/).*?(?=\/stream)/g);
          console.log('urlArray', urlArray);
          return {
            ...song,
            url: urlArray[0]
          }
        })
        this.setState({ playlist: updatedPlaylist })
      })
      .catch(error => console.error(error));
  }

  componentWillUnmount = () => {
    this._isMounted = false;
  }

  backgroundColorFinder = (id) => {
    switch(id) {
      case 0:
        return '#3A506B'
      case 1:
        return '#FFBC42'
      case 2:
        return '#AED9E0'
      case 3 :
        return '#E86163'
      default:
        return null;
    };
  }

  render() {
    const playlistColor = this.backgroundColorFinder(this.state.playlistId);

    return (
      <>
      <Header
      logOut={this.props.logOut}
      resetCurrentMood={this.props.resetCurrentMood}
      />
      <section className='main-playlist-container'>
        <div style={{backgroundColor: playlistColor}} className='playlist-container'>
        {this.state.playlist.length &&
          <PlaylistCard playlist={this.state.playlist}/>
        }
        </div>
      </section>
      </>
    )
  }
}
