import React from 'react';
import './HomeTabs.css';
import { Link } from 'react-router-dom';

const HomeTabs = ({ setCurrentMood, mood, index } ) => {
  const { type, id } = mood;
  return (
    <div className='tab-section'>
      <Link to={`/home/${id}/moods`}>
        <button onClick={(e) => setCurrentMood(type)}
        className='mood-tab'>{type}</button>
      </Link>
    </div>
  );
}


export default HomeTabs;
