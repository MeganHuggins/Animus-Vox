import React from 'react';
import './HomeTabs.css';
import { Link } from 'react-router-dom';

const HomeTabs = ({ setCurrentMood, mood, index } ) => {
  const { type, id } = mood;
  return (
    <>
      <Link to={`/home/${id}/moods`}>
        <button id='mood-btns' onClick={(e) => setCurrentMood(type)}
        className='mood-tab'>{type}</button>
      </Link>
    </>
  );
}


export default HomeTabs;
