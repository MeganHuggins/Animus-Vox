import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeContainer from './HomeContainer';
import { MemoryRouter } from 'react-router-dom';

describe('HomeContainer',() => {

  it('Should show the home page with mood tabs when rendered', () => {
    const userInfo = {
      userName: 'Megan'
    };

    const moods = [{type: 'Sad/Introspective', id: 0, statement:'Let’s Let It Out' }, {type: 'Happy/Energetic', id: 1, statement: 'Let’s Get Hyped'}, {type: 'Chill/Focused', id: 2, statement:'Let’s Chill Out'}, {type: 'Angry/Rebellious', id: 3, statement: 'Let’s Rage' }];

    const { getByText } = render(
    <MemoryRouter>
      <HomeContainer moods={moods} userInfo={userInfo}/>
   </MemoryRouter>);

   const mainGreeting = getByText('Hello, Megan');
   const subGreeting = getByText('How Are You Feeling Today?')
   const sadTab = getByText('Sad/Introspective');
   const happyTab = getByText('Happy/Energetic');
   const calmTab = getByText('Chill/Focused');
   const angryTab = getByText('Angry/Rebellious');

    expect(mainGreeting).toBeInTheDocument;
    expect(subGreeting).toBeInTheDocument;
    expect(happyTab).toBeInTheDocument;
    expect(calmTab).toBeInTheDocument;
    expect(sadTab).toBeInTheDocument;
    expect(angryTab).toBeInTheDocument;
  });
});
