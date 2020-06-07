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
        console.log('data', data);
        const updatedPlaylist = data.map(song => {
          const urlArray = song.eId.match(/(?<=#https:\/\/).*?(?=\/stream)/g);
          return {
            ...song,
            url: urlArray
          }
        })
        this.setState({ playlist: updatedPlaylist })
      })
      .catch(error => console.error(error));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
      <Header />
      <section className='playlist-continer'>
        {this.state.playlist.length &&
          <PlaylistCard playlist={this.state.playlist}/>
        }
      </section>
      </>
    )
  }
}
