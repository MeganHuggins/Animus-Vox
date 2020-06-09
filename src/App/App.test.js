import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('App', () => {

  it('should load the LoginPage on startup', async () => {
    const history = createMemoryHistory()
    history.push('/')
    const { getByText, getByPlaceholderText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    await waitFor(() => {
      expect(getByText('Animus Vox')).toBeInTheDocument();
      expect(getByText('The Sound of the Soul')).toBeInTheDocument();
      expect(getByPlaceholderText('Name')).toBeInTheDocument();
      expect(getByText('Enter')).toBeInTheDocument();
    });
  });

});

// it('Should place the names of all the moods passed in', () => {
  //     const mood = [{type: 'Sad/Introspective', id: 0, statement:'Let’s Let It Out' }];
  //     const { getByText } = render(
    //       <MemoryRouter>
    //         <App mood={mood} />
    //       </MemoryRouter>
    //     );
    //     const sadTab = getByText('Sad/Introspective');
    //     const happyTab = getByText('Happy/Energetic');
    //     const calmTab = getByText('Chill/Focused');
    //     const angryTab = getByText('Angry/Rebellious');
    //
    //     expect(happyTab).toBeInTheDocument;
    //     expect(calmTab).toBeInTheDocument;
    //     expect(sadTab).toBeInTheDocument;
    //     expect(angryTab).toBeInTheDocument;
    // });

// it('Should bring the user back to the HomePage when the Home btn is          clicked', () => {
//   const mockResetMood = jest.fn();
//   function renderWithRouter(
//     ui,
//     {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
//     {initialState = {}, store = createStore(() => {}, initialState)} = {},
//   ) {
//     return {
//       ...render(
//         <Provider store={store}>
//           <Router history={history}>{ui}</Router>
//         </Provider>,
//       ),
//       history,
//       store,
//     }
//   };
