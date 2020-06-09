import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './LoginPage.js';

describe('LoginPage', () => {
  it('Should load the LoginPage on startup', () => {
    const history = createMemoryHistory();
    history.push('/');
    const { getByText } = render(
      <Router history={history}>
        <LoginPage />
      </Router>
    );
    const mainHeader = getByText('Animus Vox');

    expect(mainHeader).toBeInTheDocument();
  });

  it('Should render a site logo and a form', () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const mainHeader = getByText('Animus Vox');
    const subHeader = getByText('The Sound of the Soul');
    const userNameInput = getByPlaceholderText('Name');
    const login = getByText('Enter');
  });

  it('Should only advance to the HomePage when userName info is provided', () => {
    const mockLogin = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginPage setUserInfo={mockLogin} />
      </MemoryRouter>
    );
    const login = getByText('Enter')

    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: '' }
    });
    fireEvent.click(login);
    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: 'Megan' }
    });
    fireEvent.click(login);
    expect(mockLogin).toHaveBeenCalledTimes(1)
  });

  it('Should not advance if userinfo is not provided', () => {
    const mockLogin = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <LoginPage setUserInfo={mockLogin} />
      </MemoryRouter>
    );
    const login = getByText('Enter');

    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: '' }
    });
    fireEvent.click(login);
    expect(mockLogin).toHaveBeenCalledTimes(0)
  });

  // it('Should be able to change views when clicked on', () => {
  //   const history = createMemoryHistory();
  //   history.push('/home');
  //   const mockLogin = jest.fn();
  //   const { getByPlaceholderText, getByText,debug } = render(
  //     <Router history={history}>
  //       <App setUserInfo={mockLogin} />
  //     </Router>
  //   );
  //   const login = getByText('Enter');
  //
  //   fireEvent.change(getByPlaceholderText('Name'), {
  //     target: { value: 'Megan' }
  //   });
  //   fireEvent.click(login);
  //
  //   const homeGreeting = getByText('Hello, Megan');
  //   expect(homeGreeting).toBeInTheDocument();
  // });
});
