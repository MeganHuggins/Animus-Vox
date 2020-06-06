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
      playlistSelected: false,
      selectedOppositeMood: {
        id: null,
        statement: ''
      },
      otherOppositeMoods: [],
    }
  }

  componentDidMount = async () => {
    const foundOpposite = await this.initialOppositeFinder(this.props.moodId);

    await this.setState({ selectedOppositeMood: {
      id: foundOpposite.id,
      statement: foundOpposite.statement
    }});

    await this.filterOppositeMoods(this.props.allMoods, this.state.selectedOppositeMood);
  }

  initialOppositeFinder = (id) => {
    switch(id) {
      case 0:
        return {
          id: 1,
          statement: 'Let’s Get Hyped'
        };
      case 1:
        return {
          id: 2,
          statement: 'Let’s Chill Out'
        };
      case 2:
        return {
          id: 1,
          statement: 'Let’s Get Hyped'
        };
      case 3 :
        return {
          id: 2,
          statement: 'Let’s Chill Out'
        };
      default:
        return null;
    };
  }

  filterOppositeMoods = (moods, oppositeMood) => {
    const noneSelectedMoods = [];
    moods.forEach(mood => {
      if(mood.id !== this.state.currentMoodId && mood.id !== oppositeMood.id) {
        noneSelectedMoods.push(mood.type)
      };
    });

    this.setState({ otherOppositeMoods: noneSelectedMoods });
  }

  handleOppositeChange = () => {

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
    const backgroundImg = this.backgroundImgFinder(this.props.moodId);
    const selectedOppositeMood = this.state.selectedOppositeMood;
    const otherOppositeMoods = this.state.otherOppositeMoods;

    return (
      <>
      <Header />
      <section className='playlist-container'>
        <div id={selectedOppositeMood.id} className='opposite-mood-section'>
          <h2 className='choice-header'>What does your soul need to hear right now?</h2>
          <button className='current-mood-btn'>{selectedOppositeMood.statement}</button>
          <select className='drop-down-field' required type='select' onChange={(e) => this.handleOppositeChange(e)}>
            <option value=''></option>
            <option value=''>{otherOppositeMoods[0]}</option>
            <option value=''>{otherOppositeMoods[1]}</option>
          </select>
        </div>
        <div id={this.currentMoodId} className='current-mood-section'>
          <button className='current-mood-btn'>Continue with how I’m feeling</button>
        </div>
      </section>
      </>
    )
  }
}
