import React, { Component } from 'react';
import './PlaylistContainer.css';
import Header from '../Header/Header';
import PlaylistCard from '../PlaylistCard/PlaylistCard';

export default class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoodId: this.props.moodId,
      fetchedPlayList: [],
      playlistSelected: false
    }
  }

  oppositeIdFinder = (id) => {
    switch(id) {
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 1;
      case 3 :
        return 2;
      default:
        return null;
    }
  }

  backgroundImgFinder = (id) => {
    // switch(id) {
    //   case 0:
    //     return 1;
    //   case 1:
    //     return 2;
    //   case 2:
    //     return 1;
    //   case 3 :
    //     return 2;
    //   default:
    //     return null;
  }

  render () {
    const oppositeMoodId = this.oppositeIdFinder(this.props.moodId);
    const backgroundImg = this.backgroundImgFinder(this.props.moodId);

    return (
      <>
      <Header />
      <section className='playlist-container'>
        <div id={oppositeMoodId} className='opposite-mood-section'>
          <h2 className='choice-header'>What does your soul need to hear right now?</h2>
          <button className='opposite-mood-btn'></button>
        </div>
        <div id={this.currentMoodId} className='current-mood-section'>
          <button className='current-mood-btn'>Continue with how I’m feeling</button>
        </div>
      </section>
      </>
    )
  }
}
