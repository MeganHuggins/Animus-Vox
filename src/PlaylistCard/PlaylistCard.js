import React from 'react';
import './PlaylistCard.css';
import SongCard from '../SongCard/SongCard';

const PlaylistCard = ({ playlist }) => {
  const playlistName = playlist[0].pl.name;
  const playlistSongs = playlist.map(song => {
    return(
      <SongCard key={song.uId} song={song}/>
    )
  });

  return (
    <div className='playlist-cards-section'>
      <div className='quote-card'>
      </div>
      <div className='playlist-card'>
        <h2>{playlistName}</h2>
          {playlistSongs}
      </div>
    </div>
  )
}

export default PlaylistCard;
