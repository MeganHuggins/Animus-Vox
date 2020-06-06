import React from 'react';
import './HomeContainer.css';
import HomeTabs from '../HomeTabs/HomeTabs';

const HomeContainer = ({ moods, userInfo }) => {
  const homeTabs = moods.map((mood, index) => {
    return(
      <HomeTabs key={index} mood={mood} index={index}/>
    )
  });

  return (
    <section className='home-container'>
      <div className='greeting-section'>
        <h1 className='greeting'>Hello, {userInfo.userName}</h1>
        <h2 className='sub-greeting'>How Are You Feeling Today?</h2>
      </div>
      <div className='tab-sections'>
        {homeTabs}
      </div>
    </section>
  );
}

export default HomeContainer;
