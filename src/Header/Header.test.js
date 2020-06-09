import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


describe('Header', () => {
  it('Should render a logo/ home and log out buttons', () => {

    const { getByText, getByAltText } = render(

      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = getByAltText(/heart with music notes/i);
    const homeBtn = getByText('Home');
    const logoOutBtn = getByText('Log Out');

    expect(logo).toBeInTheDocument;
    expect(homeBtn).toBeInTheDocument;
    expect(logoOutBtn).toBeInTheDocument;
  });

  it('Should sign a user out when Log Out button is clicked', () => {
    const mockLogOut = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Header logOut={mockLogOut}/>
      </MemoryRouter>
    );
    const logoOutBtn = getByText('Log Out');

    fireEvent.click(logoOutBtn);
    expect(mockLogOut).toHaveBeenCalled()
  });

  it('Should reset current mood when Home btn is clicked', () => {
    const mockResetMood = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Header resetCurrentMood={mockResetMood}/>
      </MemoryRouter>
    );
    const homeBtn = getByText('Home');

    fireEvent.click(homeBtn);
    expect(mockResetMood).toHaveBeenCalled();
  });

});
