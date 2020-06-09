import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import OptionsPage from './OptionsPage.js';

describe('OptionsPage', () => {
  it('Should render a header, a greeting and section for the current mood or an opposite mood', () => {
    const moods = [{type: 'Sad/Introspective', id: 0, statement:'Let’s Let It Out' }, {type: 'Happy/Energetic', id: 1, statement: 'Let’s Get Hyped'}, {type: 'Chill/Focused', id: 2, statement:'Let’s Chill Out'}, {type: 'Angry/Rebellious', id: 3, statement: 'Let’s Rage' }];
    const mockCurrentMood = "Happy/Energetic";
    const mockMoodId = 1;
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <OptionsPage allMoods={moods} currentMood={mockCurrentMood} moodId={mockMoodId}/>
      </MemoryRouter>
    );

    const header = getByText('Home');
    const greeting = getByText('What does your soul need to hear right now?');
    const currentMoodBtn = getByText('Continue with how I’m feeling');
    const oppositeMoodBtn = getByTestId('opposite-btn');

    expect(header).toBeInTheDocument();
    expect(greeting).toBeInTheDocument();
    expect(currentMoodBtn).toBeInTheDocument();
    expect(oppositeMoodBtn).toBeInTheDocument();
  });
})
