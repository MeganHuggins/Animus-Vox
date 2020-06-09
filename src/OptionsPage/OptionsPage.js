import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './OptionsPage.css';
import Header from '../Header/Header';

export default class OptionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoodId: this.props.moodId,
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
        noneSelectedMoods.push(mood)
      };
    });
    this.setState({ otherOppositeMoods: noneSelectedMoods });
  }

  handleOppositeChange = async (e) => {
    e.preventDefault();
    const selectedIndex = e.target.options.selectedIndex;
    const newId = parseInt(e.target.options[selectedIndex].getAttribute('mood-id'));
    const { value } = e.target;

    await this.setState({ selectedOppositeMood: {
      id: newId,
      statement: value
    }});
    this.filterOppositeMoods(this.props.allMoods, this.state.selectedOppositeMood);
  }

  mainColorFinder = (id) => {
    switch(id) {
      case 0:
        return 'rgba(58, 80, 107, 0.7)'
      case 1:
        return 'rgba(255, 188, 66, 0.7)'
      case 2:
        return 'rgba(174, 217, 224, 0.7)'
      case 3 :
        return 'rgba(232, 97, 99, 0.7)'
      default:
        return null;
    };
  }

  oppositeColorFinder = (id) => {
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

  render () {
    const selectedMood = this.props.moodId;
    const selectedOppositeMood = this.state.selectedOppositeMood;
    const mainColor = this.mainColorFinder(this.props.moodId);
    const oppositeColor = this.oppositeColorFinder(selectedOppositeMood.id)
    const otherOppositeMoods = this.state.otherOppositeMoods;
    const dropDownOptions = otherOppositeMoods.map(mood => {
      return <option key={mood.id} mood-id={mood.id} value={mood.statement}>{mood.type}</option>
    });

    return (
      <>
      <Header
      logOut={this.props.logOut}
      resetCurrentMood={this.props.resetCurrentMood}
      />
      <section style={{backgroundColor: mainColor}} className='options-container'>
        <div style={{background: oppositeColor}} id={selectedOppositeMood.id} className='opposite-mood-section'>
          <h2 className='choice-header'>What does your soul need to hear right now?</h2>
          <div className='opposite-btn-selection'>
            <Link to={`/home/playlist/${selectedOppositeMood.id}/`}>
              <button id={selectedOppositeMood.id} className='current-opposite-btn'>{selectedOppositeMood.statement}</button>
            </Link>
            <select value={this.state.value} className='drop-down-field' required type='select' onChange={(e) => this.handleOppositeChange(e)}>
              <option value=''></option>
              {dropDownOptions}
            </select>
          </div>
        </div>
        <div id={this.props.moodId} className='current-mood-section'>
          <Link to={`/home/playlist/${this.props.moodId}/`}>
            <button className='current-mood-btn'>Continue with how I’m feeling</button>
          </Link>
        </div>
      </section>
      </>
    )
  }
}
