import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlaylistContainer from './PlaylistContainer';
import { MemoryRouter } from 'react-router-dom';
import { fetchPlayList } from '../apiCalls';
jest.mock('../apiCalls')

describe('PlaylistContainer', () => {
  let mockPlaylistResponse;
  let mockPlaylistId;

  it('Should render a Header and a Playlist Card', async () => {
    mockPlaylistResponse = [{
    _id:
    "5ed9a4401a2e24659df36bd2",
    eId:
    "/sc/wearebigbeat/alex-newell-keep-it-moving-mozambo-remix#https://api.soundcloud.com/tracks/311625906/stream",
    img:
    "https://i1.sndcdn.com/artworks-000211818623-5peyn3-t300x300.jpg",
    lov:
    [],
    name:
    "Alex Newell - Keep It Moving (Mozambo Remix)",
    nbP:
    0,
    nbR:
    0,
    pl:
    {id: 1, name: "Play A Freaking Banger "},
    repost:
    {pId: "5ed99fa01a2e24659df36bc6", uId: "5ed925f8dadc93b52099d1d0", uNm: "Megan Huggins"},
    text:
    "",
    uId:
    "5ed925f8dadc93b52099d1d0",
    uNm:
    "Megan Huggins"
  }];
  mockPlaylistId = 1;
  fetchPlayList.mockResolvedValueOnce(mockPlaylistResponse);

  const { getByText } = render(
    <MemoryRouter>
      <PlaylistContainer playlistId={mockPlaylistId} />
    </MemoryRouter>
  );

  const header = getByText('Home');
  const playlistCard = getByTestId('playlist-card');
  const playlistHeader = getByText('Play A Freaking Banger');

  expect(header).toBeInTheDocument();
  expect(playlistCard).toBeInTheDocument();
  expect(playlistHeader).toBeInTheDocument();
  });

});
