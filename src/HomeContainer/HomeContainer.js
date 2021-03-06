import React from 'react';
import './HomeContainer.css';
import HomeTabs from '../HomeTabs/HomeTabs';

const HomeContainer = ({ setCurrentMood, moods, userInfo }) => {
  const homeTabs = moods.map(mood => {
    return(
      <HomeTabs key={mood.id} setCurrentMood={setCurrentMood} mood={mood} />
    )
  });

  return (
    <section className='home-container'>
      <div className='greeting-section'>
        <h1 className='main-greeting'>Hello, {userInfo.userName}</h1>
        <h2 className='sub-greeting'>How Are You Feeling Today?</h2>
      </div>
        {homeTabs}
    </section>
  );
}

export default HomeContainer;
