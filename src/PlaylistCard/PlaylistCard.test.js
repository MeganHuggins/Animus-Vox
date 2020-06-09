import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PlaylistCard from './PlaylistCard.js';
import { fetchPlayList } from '../apiCalls';
jest.mock('../apiCalls');

describe('PlaylistContainer', () => {
  let mockPlaylistResponse;
  let mockPlaylistId;

  it('Should render the name of the chossen Playlist', async () => {
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
    "Megan Huggins",
    url:
    "api.soundcloud.com/tracks/311625906"
  }];
  fetchPlayList.mockResolvedValueOnce(mockPlaylistResponse);

  const { getByText } = render(
    <MemoryRouter>
      <PlaylistCard  playlist={mockPlaylistResponse} />
    </MemoryRouter>
  );
  const playlistHeader = getByText('Play A Freaking Banger');

  expect(playlistHeader).toBeInTheDocument();
  });
});
