import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter, Router } from 'react-router-dom';

describe('App', () => {

  it('should load the LoginPage on startup', async () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(getByText('Animus Vox')).toBeInTheDocument();
      expect(getByText('The Sound of the Soul')).toBeInTheDocument();
      expect(getByPlaceholderText('Name')).toBeInTheDocument();
      expect(getByText('Enter')).toBeInTheDocument();
    });
  });

  it('Should load the Home Page once the user inputs their log info', async () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const login = getByText('Enter');

    await waitFor(() => {
      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Megan' }
      });
    });
    fireEvent.click(login);

    const homeHeader = getByText('Hello, Megan');
    expect(homeHeader).toBeInTheDocument();
  });

  it('Should load the OptionsPage with the current mood and opposite mood once the user selects their current mood', async () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter >
        <App />
      </MemoryRouter>
    );
    const login = getByText('Enter');

    await waitFor(() => {
      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Megan' }
      });
    });
    fireEvent.click(login);

    await waitFor(() => {
      fireEvent.click(getByText('Happy/Energetic'));
    });

    const currentMood = getByText('Continue with how I’m feeling');
    const oppositeMood = getByText('Let’s Chill Out');

    expect(currentMood).toBeInTheDocument();
    expect(oppositeMood).toBeInTheDocument();
  });

});
