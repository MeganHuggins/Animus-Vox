import React from 'react';
import './HomeTabs.css';
import { Link } from 'react-router-dom';

const HomeTabs = ({ mood, index }) => {
  return (
    <div className='tab-section'>
      <Link to={`/home/${index}/moods`}>
        <button className='mood-tab'>{mood}</button>
      </Link>
    </div>
  );
}


export default HomeTabs;
