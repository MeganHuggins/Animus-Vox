import React, { Component } from 'react';
import './PlaylistContainer.css';
import Header from '../Header/Header';
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import { fetchedPlayList } from '../apiCalls';

export default class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedPlayList: [],
      playlistId: this.props.playlistId,
    }
  }

  componentDidMount = async () => {
    const playlistId = this.state.playlistId

    fetchedPlayList(playlistId)
      .then(data => this.setState({
        fetchedPlayList: data
      }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <h1>Hey</h1>
    )
  }
}
